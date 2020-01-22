import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
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
  historyOptions;
  taleOptions;

  // @ts-ignore
  @ViewChild('content') content: ElementRef;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public rewardService: RewardService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.historyOptions = data.historyOptions;
    this.taleOptions = data.taleOptions;


    this.rewardFormGroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, this.badWordValidator()]],
      history: [null],
      tale: [null]

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
  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /arsch/.test(control.value);
      const forbidden2 = /idiot/.test(control.value);
      return forbidden || forbidden2 ? {badWord: {value: control.value}} : null;
    };
  }
}
