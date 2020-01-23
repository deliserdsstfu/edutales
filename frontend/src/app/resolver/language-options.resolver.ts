import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuizService} from '../service/quiz.service';
import {TaleService} from '../service/tale.service';
import {HistoryService} from '../service/history.service';
import {LanguageService} from '../service/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageOptionsResolver implements Resolve<Observable<any>> {
  constructor(private languageService: LanguageService) {
  }

  resolve() {
    return this.languageService.retrieveLanguageOptions();
  }
}
