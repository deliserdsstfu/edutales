import {Component, Input, OnInit} from '@angular/core';
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
  taleQuizGroup;
  data: any;
  isSubmitted = false;

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

    this.taleQuizGroup = this.fb.group({
    isTrue: ['', [Validators.required]]
    });
  }
  get myForm() {
    return this.taleQuizGroup.get('isTrue');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.taleQuizGroup.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.taleQuizGroup.value));
      console.log(this.taleQuizGroup.isTrue);
    }
  }

/*  isRight() {
    if (this.quiz.answer.isTrue)  {

    }
  }*/
}
