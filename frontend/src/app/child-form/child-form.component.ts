import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {IAlert} from '../components/notification/notification.component';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  childFormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public childService: ChildService, public gameService: GameService) {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert',
      icon: 'nc-bell-55'
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert',
      icon: 'nc-bell-55'
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }


  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  ngOnInit() {
    const data = this.route.snapshot.data;

    this.childFormGroup = this.fb.group({
      id: [null],
      user_name: ['', Validators.required],
      year_of_birth: [null, Validators.required],
      game: [null],
      progress: [null],
      reward: [null]
    });

    if (data.child) {
      this.childFormGroup.patchValue(data.child);
    }
  }
  createChild() {
    const child = this.childFormGroup.value;
    if (child.id) {
      this.childService.updateChild(child)
          .subscribe(() => {
            alert('updated successfully');
          });
    } else {
      this.childService.createChild(child)
          .subscribe((response: any) => {
            this.router.navigate(['/child-form/' + response.id]);
          });
    }
  }


}

export interface IAlert {
  id: number;
  type: string;
  message: string;
  icon?: string;
}
