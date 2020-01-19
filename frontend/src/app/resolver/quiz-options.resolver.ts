import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuizService} from '../service/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressOptionsResolver implements Resolve<Observable<any>> {
  constructor(private quizService: QuizService) {
  }

  resolve() {
    return this.quizService.retrieveQuizOptions();
  }
}
