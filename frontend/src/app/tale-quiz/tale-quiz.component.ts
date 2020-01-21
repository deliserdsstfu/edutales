import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';
import {QuizResolver} from '../resolver/quiz.resolver';

@Component({
  selector: 'app-tale-quiz',
  templateUrl: './tale-quiz.component.html',
  styleUrls: ['./tale-quiz.component.scss'],

})
export class TaleQuizComponent implements OnInit {

 // tale: any[] = [];
  displayedColumns = ['id', 'title', 'text', 'quiz_question', 'answer_answer'];
  private quiz: any;
  taleQuizGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private taleService: TaleService, public quizService: QuizService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
   // this.tale.push(data.tale);
    // const quiz = this.quizService.getQuiz(data.tale.quiz);

    this.taleQuizGroup = this.fb.group({
      id: [null],
      title: [''],
      text: ['']
     // quiz_question: [''],
     // answer_answer: ['']
    });
    if (data.tale) {
      this.taleQuizGroup.patchValue(data.tale);
    }

  }
/*  isRight() {
    if (this.quiz.answer.isTrue)  {

    }
  }*/
}
