import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';
import {HistoryService} from '../service/history.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as Filter from 'bad-words';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.scss']
})
export class HistoryFormComponent implements OnInit {

  historyFormGroup;
  quizOptions;

  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router, private route: ActivatedRoute,
              public historyService: HistoryService, public typeService: TypeService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.quizOptions = data.quizOptions;

    this.historyFormGroup = this.fb.group({
      id: [null],
      title: ['', [Validators.required, this.badWordValidator()], [this.historyNameValidator()]],
      type: [null],
      text: ['', Validators.required],
      quiz: [null]
    });

    if (data.tale) {
      this.historyFormGroup.patchValue(data.tale);
    }
  }

  createHistory() {
    const history = this.historyFormGroup.value;
    if (history.id) {
      this.historyService.updateHistory(history)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.historyService.createHistory(history)
        .subscribe((response: any) => {
          this.router.navigate(['/history-form/' + response.id]);
        });
    }
  }

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new Filter();
      return forbidden.isProfane(control.value) ? {badWord: {value: control.value}} : null;
    };
  }

  historyNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.historyService.getHistories()
        .pipe(
          map((reward: any[]) => {
            const currentId = this.historyFormGroup.controls.id.value;
            const currentTitle = control.value;
            const historyWithSameName = reward.find((h) => {
              return h.id !== currentId && h.title === currentTitle;
            });
            if (historyWithSameName) {
              return {
                historyAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    };
  }
}
