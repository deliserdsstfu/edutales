import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
// Child Services

  constructor(private http: HttpClient) {
  }

  getBooks() {
    return this.http.get('/api/child/list');
  }

  createChild(child) {
    return this.http.post('/api/child/create', child);
  }

  updateChild(child) {
    return this.http.put('/api/child/' + child.id + '/update', child);
  }

  getChild(id) {
    return this.http.get('/api/child/' + id + '/get');
  }

  deleteChild(child) {
    return this.http.delete('/api/child/' + child.id + '/delete');
  }
}


