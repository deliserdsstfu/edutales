import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {RewardService} from '../service/reward.service';

@Injectable({
  providedIn: 'root'
})
export class RewardResolver implements Resolve<Observable<any>> {
  constructor(private rewardService: RewardService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.rewardService.getReward(route.paramMap.get('id'));
  }
}
