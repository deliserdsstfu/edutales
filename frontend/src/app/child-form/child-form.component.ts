import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';
import * as Filter from 'bad-words';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  childFormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute,
              public childService: ChildService, public gameService: GameService, private parentService: ParentService,
              private userService: UserService) {
  }


  ngOnInit() {
    const data = this.route.snapshot.data;
    this.childFormGroup = this.fb.group({
      id: [null],
      user_name: [null, [Validators.required, this.badWordValidator()], [this.userNameValidator()]],
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

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new Filter();
      return forbidden.isProfane(control.value) ? {badWord: {value: control.value}} : null;
    };
  }

  userNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.childService.getChildren()
        .pipe(
          map((child: any[]) => {
            const currentId = this.childFormGroup.controls.id.value;
            const currentUserName = control.value;
            const childWithSameUserName = child.find((c) => {
              return c.id !== currentId && c.user_name === currentUserName;
            });
            if (childWithSameUserName) {
              return {
                childAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    };
  }
}
