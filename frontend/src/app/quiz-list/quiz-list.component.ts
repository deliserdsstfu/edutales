import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildService} from '../service/child.service';
import {QuizService} from '../service/quiz.service';
import {AnswerOptionsResolver} from '../resolver/answer-options.resolver';
import {AnswerService} from '../service/answer.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizzes: any[];
  displayedColumns = ['question', 'answer', 'points', 'id']

  constructor(private http: HttpClient, private quizService: QuizService, private answerService: AnswerService) { }

  ngOnInit() {
    this.quizService.getQuizzes()
      .subscribe((response: any) => {
        this.quizzes = response;
      });
  }

  deleteQuiz(quiz) {
    this.quizService.deleteQuiz(quiz)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
