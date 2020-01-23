import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaleQuizService {

  constructor(private http: HttpClient) { }

  getTaleQuizs() {
    return this.http.get('/api/tale-quiz/list');
  }

  getTaleQuiz(id) {
    return this.http.get('/api/tale-quiz/' + id + '/get');
  }

  createTaleQuiz(tale) {
    return this.http.post('/api/tale-quiz/create', tale);
  }

  updateTaleQuiz(tale) {
    return this.http.put('/api/tale-quiz/' + tale.id + '/update', tale);
  }

  deleteTaleQuiz(tale) {
    return this.http.delete('/api/tale-quiz/' + tale.id + '/delete', tale);
  }

  retrieveTaleQuizOptions() {
    return this.http.get <any[]>('api/tale-quiz/options');
  }
}
