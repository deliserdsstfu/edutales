import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AnswerService} from '../service/answer.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerOptionsResolver implements Resolve<Observable<any>> {
  constructor(private answerService: AnswerService) {
  }

  resolve() {
    return this.answerService.retrieveAnswerOptions();
  }
}
