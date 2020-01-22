import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';
import {QuizResolver} from '../resolver/quiz.resolver';
import {TaleQuizService} from '../service/tale-quiz.service';

@Component({
  selector: 'app-tale-quiz',
  templateUrl: './tale-quiz.component.html',
  styleUrls: ['./tale-quiz.component.scss'],

})
export class TaleQuizComponent implements OnInit {

  tale: any;
  finished =  false;
 // question;
  data: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              // tslint:disable-next-line:max-line-length
              private router: Router, private taleService: TaleService, private taleQuizService: TaleQuizService, public quizService: QuizService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taleService.getTale(id).subscribe(
      (response: any) => {
        this.tale = response;
        this.finished = true;
       // this.question = this.quizService.getQuiz(response.quiz);
      });
    this.data = this.route.snapshot.data.taleQuizResolver;
   // console.log(this.data.taleQuizResolver.quiz_question);
   // console.log(this.question);

   // const q = this.quizService.getQuiz(this.tale.quiz);
   // this.question = this.route.snapshot.paramMap.get('quiz_question');


    // console.log(data);
    // this.tales.push(data);
    // const quiz = this.quizService.getQuiz(data.tale.quiz);


  }

/*  isRight() {
    if (this.quiz.answer.isTrue)  {

    }
  }*/
}
