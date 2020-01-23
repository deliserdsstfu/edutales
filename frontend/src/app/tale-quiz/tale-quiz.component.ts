import {Component, Input, OnInit} from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';
import {QuizResolver} from '../resolver/quiz.resolver';
import {TaleQuizService} from '../service/tale-quiz.service';
import {any} from 'codelyzer/util/function';
import {isBoolean} from 'util';

@Component({
  selector: 'app-tale-quiz',
  templateUrl: './tale-quiz.component.html',
  styleUrls: ['./tale-quiz.component.scss'],

})


export class TaleQuizComponent implements OnInit {

  tale: any;
  finished =  false;
  data: any;
  taleQuizFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              // tslint:disable-next-line:max-line-length
              private router: Router, private taleService: TaleService, private taleQuizService: TaleQuizService, public quizService: QuizService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taleService.getTale(id).subscribe((response: any) => {this.tale = response; this.finished = true;});
    this.data = this.route.snapshot.data.taleQuizResolver;

    this.taleQuizFormGroup = this.fb.group({
      isTrue: [''],
    });
    // const q = this.quizService.getQuiz(this.tale.quiz.value);
   // console.log(q);
    // const data = this.route.snapshot.data;
    // this.tales.push(data);
    // const quiz = this.quizService.getQuiz(data.tale.quiz);



  }

  checkAnswer() {
    const param = this.route.snapshot.paramMap.get('isTrue');
    const correctAnswer = this.taleQuizFormGroup.value;
    if (param === correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

/*  isRight() {
    if (this.quiz.answer.isTrue)  {

    }
  }*/
}
