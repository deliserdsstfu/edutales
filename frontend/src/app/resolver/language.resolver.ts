import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {HistoryService} from '../service/history.service';
import {LanguageService} from '../service/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageResolver implements Resolve<Observable<any>> {
  constructor(private languageService: LanguageService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.languageService.getLanguage(route.paramMap.get('id'));
  }
}

