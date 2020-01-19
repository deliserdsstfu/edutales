import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaleService {

  constructor(private http: HttpClient) { }

  getTales() {
    return this.http.get('/api/tale/list');
  }

  getTale(id) {
    return this.http.get('/api/tale/' + id + '/get');
  }

  createTale(tale) {
    return this.http.post('/api/tale/create', tale);
  }

  updateTale(tale) {
    return this.http.put('/api/tale/' + tale.id + '/update', tale);
  }

  deleteTale(tale) {
    return this.http.delete('/api/tale/' + tale.id + '/delete', tale);
  }

  retrieveTaleOptions() {
    return this.http.get <any[]>('api/tale/options');
  }
}
