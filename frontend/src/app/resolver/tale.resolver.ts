import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {TaleService} from '../service/tale.service';

@Injectable({
  providedIn: 'root'
})
export class TaleResolver implements Resolve<Observable<any>> {
  constructor(private taleService: TaleService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.taleService.getTale(route.paramMap.get('id'));
  }
}
