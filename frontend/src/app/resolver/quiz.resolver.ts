import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuizService} from '../service/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuizResolver implements Resolve<Observable<any>> {
  constructor(private quizService: QuizService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.quizService.getQuiz(route.paramMap.get('id'));
  }
}
