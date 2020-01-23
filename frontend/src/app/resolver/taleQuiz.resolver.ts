import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AnswerService} from '../service/answer.service';
import {TaleQuizService} from '../service/tale-quiz.service';

@Injectable({
  providedIn: 'root'
})
export class TaleQuizResolver implements Resolve<Observable<any>> {
  constructor(private taleQuizService: TaleQuizService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.taleQuizService.getTaleQuiz(route.paramMap.get('id'));
  }
}
