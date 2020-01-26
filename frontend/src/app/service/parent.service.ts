import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getParents() {
    return this.http.get('/api/parent/list');
  }

  getParent(id) {
    return this.http.get('/api/parent/' + id + '/get');
  }

  createParent(parent) {
    return this.http.post('/api/parent/create', parent);
  }

  updateParent(parent) {
    return this.http.put('/api/parent/' + parent.id + '/update', parent);
  }

  deleteParent(parent) {
    return this.http.delete('/api/parent/' + parent.id + '/delete', parent);
  }

  getAParent(currId: any) {
    return this.http.get('/api/parent/' + currId + '/get');
  }

}
