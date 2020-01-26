import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RewardService} from '../service/reward.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  rewards: any[] = [];
  displayedColumns = ['name', 'tale_title', 'history_title', 'picture', 'id'];

  constructor(private http: HttpClient, private rewardService: RewardService) {
  }

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
