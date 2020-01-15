import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) { }

  getChildren() {
    return this.http.get('/api/child/list');
  }

  getChild(id) {
    return this.http.get('/api/child/' + id + '/get');
  }

  createChild(child) {
    return this.http.post('/api/child/create', child);
  }

  updateChild(child) {
    return this.http.put('/api/child/' + child.id + '/update', child);
  }

  deleteChild(child) {
    return this.http.delete('/api/child/' + child.id + '/delete', child);
  }

  retrieveChildOptions() {
    return this.http.get <any[]>('api/child/options');
  }

}
