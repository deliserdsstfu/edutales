import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private http: HttpClient) { }

  getProgresses() {
    return this.http.get('/api/progress/list');
  }

  getProgress(id) {
    return this.http.get('/api/progress/' + id + '/get');
  }

  createProgress(progress) {
    return this.http.post('/api/progress/create', progress);
  }

  updateProgress(progress) {
    return this.http.put('/api/progress/' + progress.id + '/update', progress);
  }

  deleteProgress(progress) {
    return this.http.delete('/api/progress/' + progress.id + '/delete', progress);
  }

  retrieveProgressOptions() {
    return this.http.get <any[]>('api/progress/options');
  }
}
