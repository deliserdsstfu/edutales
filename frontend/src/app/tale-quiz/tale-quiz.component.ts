import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';

@Component({
  selector: 'app-tale-quiz',
  templateUrl: './tale-quiz.component.html',
  styleUrls: ['./tale-quiz.component.scss'],

})
export class TaleQuizComponent implements OnInit {

  tale: any[] = [];
  displayedColumns = ['title', 'text', 'quiz_question', 'quiz_answer'];

  constructor(private http: HttpClient, private route: ActivatedRoute, private taleService: TaleService, public quizService: QuizService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.tale.push(data.tale);
    const quiz = this.quizService.getQuiz(data.tale.quiz);

  }
/*  isRight() {
    if (quiz.answer.includes())  {

    }
  }*/
}
