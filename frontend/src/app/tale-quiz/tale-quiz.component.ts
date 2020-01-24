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
  childId = localStorage.getItem('childId');
  pictures: number[];


  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              // tslint:disable-next-line:max-line-length
              private router: Router, private taleService: TaleService, private taleQuizService: TaleQuizService, public quizService: QuizService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taleService.getTale(id).subscribe(
      (response: any) => {
        this.tale = response;
        this.finished = true;
        this.pictures = response.pictures;
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
    const isT = this.route.snapshot.data.taleQuizResolver.quiz_true;
    // console.log(pointsIfT);
    if (!this.taleQuizGroup.valid) {
      return false;
    } else if (JSON.stringify(this.taleQuizGroup.value) === '{"isTrue":"' + isT + '"}') {
      alert('Richtige Antwort! Du hast Punkte gesammelt!');
      const pointsIfT = this.route.snapshot.data.taleQuizResolver.quiz_points;
      const pointsOld = localStorage.getItem('points');
      const pointsNew = parseInt(pointsOld, 10) + pointsIfT
      localStorage.setItem('points', pointsNew);
    }  else {
      alert('Die Antwort ist leider falsch!');
    }
  }
}
