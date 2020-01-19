import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {RewardService} from '../service/reward.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.scss']
})
export class RewardFormComponent implements OnInit {

  rewardFormGroup;
  // @ts-ignore
  @ViewChild('content') content: ElementRef;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public rewardService: RewardService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;

    this.rewardFormGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      original_file_name: [null],
      content_type: [null],
      size: [null]
    });

    if (data.reward) {
      this.rewardFormGroup.patchValue(data.reward);
    }

  }
  createReward() {
    const reward = this.rewardFormGroup.value;
    if (reward.id) {
      this.rewardService.updateReward(reward)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.rewardService.createReward(reward)
        .subscribe((response: any) => {
          this.router.navigate(['/reward-form/' + response.id]);
        });
    }
  }
}
