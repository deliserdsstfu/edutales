import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {RewardService} from '../service/reward.service';
import * as jsPDF from 'jspdf';
import * as Filter from 'bad-words';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
              private route: ActivatedRoute, public rewardService: RewardService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.historyOptions = data.historyOptions;
    this.taleOptions = data.taleOptions;


    this.rewardFormGroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, this.badWordValidator()], [this.rewardNameValidator()]],
      history: [null],
      tale: [null],
      pictures: [[]]
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
      const forbidden = new Filter();
      return forbidden.isProfane(control.value) ? {badWord: {value: control.value}} : null;
    };
  }

  rewardNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.rewardService.getRewards()
        .pipe(
          map((reward: any[]) => {
            const currentId = this.rewardFormGroup.controls.id.value;
            const currentName = control.value;
            const rewardWithSameName = reward.find((r) => {
              return r.id !== currentId && r.name === currentName;
            });
            if (rewardWithSameName) {
              return {
                rewardAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    };
  }
}
