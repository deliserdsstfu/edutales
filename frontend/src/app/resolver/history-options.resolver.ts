import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuizService} from '../service/quiz.service';
import {TaleService} from '../service/tale.service';
import {HistoryService} from '../service/history.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryOptionsResolver implements Resolve<Observable<any>> {
  constructor(private historyService: HistoryService) {
  }

  resolve() {
    return this.historyService.retrieveHistoryOptions();
  }
}
