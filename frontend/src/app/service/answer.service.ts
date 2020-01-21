import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAnswers() {
    return this.http.get('/api/answer/list');
  }

  getAnswer(id) {
    return this.http.get('/api/answer/' + id + '/get');
  }

  deleteAnswer(answer) {
    return this.http.delete('/api/answer/' + answer.id + '/delete', answer);
  }

  createAnswer(answer) {
    return this.http.post('/api/answer/create', answer);
  }

  retrieveAnswerOptions() {
    return this.http.get <any[]>('api/answer/options');
  }

  updateAnswer(answer) {
    return this.http.put('/api/answer/' + answer.id + '/update', answer);
  }

}
