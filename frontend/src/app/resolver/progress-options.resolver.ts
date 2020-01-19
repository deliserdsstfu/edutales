import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProgressService} from '../service/progress.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressOptionsResolver implements Resolve<Observable<any>> {
  constructor(private progressService: ProgressService) {
  }

  resolve() {
    return this.progressService.retrieveProgressOptions();
  }
}
