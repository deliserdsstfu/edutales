import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ChildService} from '../service/child.service';

@Injectable({
  providedIn: 'root'
})
export class ChildOptionsResolver implements Resolve<Observable<any>> {
  constructor(private childService: ChildService) {
  }

  resolve() {
    return this.childService.retrieveChildOptions();
  }
}
