import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistories() {
    return this.http.get('/api/history/list');
  }

  getHistory(id) {
    return this.http.get('/api/history/' + id + '/get');
  }

  createHistory(history) {
    return this.http.post('/api/history/create', history);
  }

  updateHistory(history) {
    return this.http.put('/api/history/' + history.id + '/update', history);
  }

  deleteHistory(history) {
    return this.http.delete('/api/history/' + history.id + '/delete', history);
  }
  retrieveHistoryOptions() {
    return this.http.get <any[]>('api/history/options');
  }

}
