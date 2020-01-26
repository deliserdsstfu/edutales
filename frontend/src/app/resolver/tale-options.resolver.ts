import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuizService} from '../service/quiz.service';
import {TaleService} from '../service/tale.service';

@Injectable({
  providedIn: 'root'
})
export class TaleOptionsResolver implements Resolve<Observable<any>> {
  constructor(private taleService: TaleService) {
  }

  resolve() {
    return this.taleService.retrieveTaleOptions();
  }
}
