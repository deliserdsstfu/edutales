import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';
import {HistoryService} from '../service/history.service';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.scss']
})
export class HistoryFormComponent implements OnInit {

  historyFormGroup;
  quizOptions;


  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public historyService: HistoryService, public typeService: TypeService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.quizOptions = data.quizOptions;

    this.historyFormGroup = this.fb.group({
      id: [null],
      title: ['', Validators.required],
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
}
