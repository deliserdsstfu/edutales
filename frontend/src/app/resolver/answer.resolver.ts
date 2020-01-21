import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AnswerService} from '../service/answer.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerResolver implements Resolve<Observable<any>> {
  constructor(private answerService: AnswerService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.answerService.getAnswer(route.paramMap.get('id'));
  }
}
