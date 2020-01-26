import {Component, Input, OnInit} from '@angular/core';

import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {QuizService} from '../service/quiz.service';
import {QuizResolver} from '../resolver/quiz.resolver';
import {TaleQuizService} from '../service/tale-quiz.service';
import {ChildService} from '../service/child.service';


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
  child;
  childId = localStorage.getItem('childId');
  progress = localStorage.getItem('points');
  done: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              // tslint:disable-next-line:max-line-length
              private router: Router, private childService: ChildService, private taleService: TaleService, private taleQuizService: TaleQuizService, public quizService: QuizService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taleService.getTale(id).subscribe(
      (response: any) => {
        this.tale = response;
        this.finished = true;
        this.childService.getChild(this.childId).subscribe((r: any) => {
          this.done = r.tale.includes(this.tale.id);
          console.log(this.done);
        });
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
    const isT = this.route.snapshot.data.taleQuizResolver.quiz_true;
    this.isSubmitted = true;
    // console.log(pointsIfT);
    if (!this.taleQuizGroup.valid) {
      return false;
    } else if (JSON.stringify(this.taleQuizGroup.value) === '{"isTrue":"' + isT + '"}') {
      this.done = true;
      this.childService.getChild(this.childId).subscribe((child: any) => {
        child.tale.push(this.tale.id);
        this.childService.updateChild(child).subscribe();
      });
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
