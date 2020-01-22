import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private http: HttpClient) { }

  getRewards() {
    return this.http.get('/api/reward/list');
  }

  getReward(id) {
    return this.http.get('/api/reward/' + id + '/get');
  }

  createReward(reward) {
    return this.http.post('/api/reward/create', reward);
  }

  updateReward(reward) {
    return this.http.put('/api/reward/' + reward.id + '/update', reward);
  }

  deleteReward(reward) {
    return this.http.delete('/api/reward/' + reward.id + '/delete', reward);
  }

}
