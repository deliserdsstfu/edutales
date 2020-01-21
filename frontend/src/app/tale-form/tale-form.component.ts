import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';
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


  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public taleService: TaleService, public typeService: TypeService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.quizOptions = data.quizOptions;

    this.taleFormGroup = this.fb.group({
      id: [null],
      title: ['', Validators.required, this.titleValidator()],
      type: [null],
      text: ['', Validators.required],
      quiz: [null]
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
          this.router.navigate(['/tale-form/' + response.id]);
        });
    }
  }

  titleValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise< ValidationErrors | null > | Observable< ValidationErrors | null> => {
      return this.taleService.getTales()
        .pipe(
          map((tale: any[]) => {
            const currentId = this.taleFormGroup.controls.id.value;
            const currentTitle = this.taleFormGroup.controls.title.value;
            const taleWithSameTitle = tale.find((t) => {
              return t.id !== currentId && t.title === currentTitle;
            });
            if (taleWithSameTitle) {
              return {
                titleAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    };
  }
}
