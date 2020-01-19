import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildService} from '../service/child.service';
import {RewardService} from '../service/reward.service';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  rewards: any[];
  displayedColumns = ['name', 'original_file_name', 'content_type', 'id', 'size'];

  constructor(private http: HttpClient, private rewardService: RewardService) { }

  ngOnInit() {
    this.rewardService.getRewards()
      .subscribe((response: any[]) => {
        this.rewards = response;
      });
  }

  deleteReward(reward) {
    this.rewardService.deleteReward(reward)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
