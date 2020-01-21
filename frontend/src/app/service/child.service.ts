import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient, private userService: UserService) { }


  getChildren(currid = this.userService.getCurrentId()) {
    return this.http.get('/api/child/list/' + currid);
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

  retrieveChildOptions(currid = this.userService.getCurrentId()) {
    return this.http.get <any[]>('api/child/options/' + currid);
  }

}
