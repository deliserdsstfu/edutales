import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AnswerService} from '../service/answer.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  answers: any[];
  displayedColumns = ['answer', 'isTrue', 'id']

  constructor(private http: HttpClient, private route: ActivatedRoute, private answerService: AnswerService) { }


  ngOnInit() {
    this.answerService.getAnswers()
      .subscribe((response: any[]) => {
        this.answers = response;
      });
  }

  deleteAnswer(answer) {
    this.answerService.deleteAnswer(answer)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
