import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {HistoryService} from '../service/history.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryResolver implements Resolve<Observable<any>> {
  constructor(private historyService: HistoryService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.historyService.getHistory(route.paramMap.get('id'));
  }
}
