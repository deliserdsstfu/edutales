import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';
import {QuizResolver} from '../resolver/quiz.resolver';
import {TaleQuizService} from '../service/tale-quiz.service';
import {HistoryService} from '../service/history.service';

@Component({
  selector: 'app-history-quiz',
  templateUrl: './history-quiz.component.html',
  styleUrls: ['./history-quiz.component.scss'],

})
export class HistoryQuizComponent implements OnInit {

  history: any;
  finished =  false;
  // question;
  data: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              // tslint:disable-next-line:max-line-length
              private router: Router, private historyService: HistoryService, private taleQuizService: TaleQuizService, public quizService: QuizService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.historyService.getHistory(id).subscribe(
      (response: any) => {
        this.history = response;
        this.finished = true;
        // this.question = this.quizService.getQuiz(response.quiz);
      });
    this.data = this.route.snapshot.data.taleQuizResolver;

  }

  /*  isRight() {
      if (this.quiz.answer.isTrue)  {

      }
    }*/
}
