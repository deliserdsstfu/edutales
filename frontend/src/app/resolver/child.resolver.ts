import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ChildService} from '../service/child.service';

@Injectable({
  providedIn: 'root'
})
export class ChildResolver implements Resolve<Observable<any>> {
  constructor(private childService: ChildService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.childService.getChild(route.paramMap.get('id'));
  }
}
