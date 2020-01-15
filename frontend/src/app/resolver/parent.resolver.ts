import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ParentService} from '../service/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ParentResolver implements Resolve<Observable<any>> {
  constructor(private parentService: ParentService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parentService.getParent(route.paramMap.get('id'));
  }
}
