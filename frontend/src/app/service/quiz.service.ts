import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizzes() {
    return this.http.get('/api/quiz/list');
  }

  getQuiz(id) {
    return this.http.get('/api/quiz/' + id + '/get');
  }

  createQuiz(quiz) {
    return this.http.post('/api/quiz/create', quiz);
  }

  updateQuiz(quiz) {
    return this.http.put('/api/quiz/' + quiz.id + '/update', quiz);
  }

  deleteQuiz(quiz) {
    return this.http.delete('/api/quiz/' + quiz.id + '/delete', quiz);
  }

  retrieveQuizOptions() {
    return this.http.get <any[]>('api/quiz/options');
  }

}
