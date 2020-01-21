import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  childFormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public childService: ChildService, public gameService: GameService, private parentService: ParentService, private userService: UserService) {
  }


  ngOnInit() {
    const data = this.route.snapshot.data;
    this.childFormGroup = this.fb.group({
      id: [null],
      user_name: [null, [Validators.required]],
      year_of_birth: [null, [Validators.required, Validators.max(2020), Validators.min(2000)]],
      game: [null],
      progress: [null],
      reward: [null],
      parent: [[]]
    });

    if (data.child) {
      this.childFormGroup.patchValue(data.child);
    }
  }
  createChild() {
    const child = this.childFormGroup.value;
    const currId = this.userService.getCurrentId();
    child.parent.push(currId);
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
