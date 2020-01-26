import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';

import * as Filter from 'bad-words';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tale-form',
  templateUrl: './tale-form.component.html',
  styleUrls: ['./tale-form.component.scss']
})
export class TaleFormComponent implements OnInit {

  taleFormGroup;
  quizOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
              private route: ActivatedRoute, public taleService: TaleService,
              public typeService: TypeService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.quizOptions = data.quizOptions;

    this.taleFormGroup = this.fb.group({
      id: [null],
      title: ['', [Validators.required, this.badWordValidator()], [this.titleTaleValidator()]],
      type: [null],
      text: ['', [Validators.required, this.badWordValidator()]],
      quiz: [null],
      pictures: [[]]
    });

    if (data.tale) {
      this.taleFormGroup.patchValue(data.tale);
    }
  }

  createTale() {
    const tale = this.taleFormGroup.value;
    if (tale.id) {
      this.taleService.updateTale(tale)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.taleService.createTale(tale)
        .subscribe((response: any) => {
          this.router.navigate(['/tale-form/' + response.id ]);

        });
    }
  }

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new Filter();
      return forbidden.isProfane(control.value) ? {badWord: {value: control.value}} : null;
    };
  }

  titleTaleValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.taleService.getTales()
        .pipe(
          map((tale: any[]) => {
            const currentId = this.taleFormGroup.controls.id.value;
            const currentTitle = control.value;
            const taleWithSameTitle = tale.find((t) => {
              return t.id !== currentId && t.title === currentTitle;
            });
            if (taleWithSameTitle) {
              return {
                taleTitleAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    };
  }
}
