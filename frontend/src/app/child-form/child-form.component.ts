import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';
import {GameService} from '../service/game.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  childFormGroup;
  children = [];

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public childService: ChildService, public gameService: GameService) {
  }


  ngOnInit() {
    const data = this.route.snapshot.data;

    this.childService.getChildren().subscribe((res: any[]) => {
      this.children.push(res);
    });

    this.childFormGroup = this.fb.group({
      id: [null],
      user_name: ['', [Validators.required]],
      year_of_birth: [null, [Validators.required, Validators.max(2020), Validators.min(2000)]],
      game: [null],
      progress: [null],
      reward: [null]
    }, {validator: this.userNameValidator()});

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

  userNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.childService.getChildren()
        .pipe(
          map((child: any[]) => {
            console.log('h');
            const currentId = this.childFormGroup.controls.id.value;
            const currentUserName = control;
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

 /* userNameValidator(control: AbstractControl) {
    const currentId = control.get('id').value;
    const currentUserName = control.get('user_name').value;
    const childWithSameUserName = false;
      /!*this.children.find((c) => {
      return c.id !== currentId && c.user_name === currentUserName;
    });*!/
    if (childWithSameUserName) {
      control.get('user_name').setErrors({childAlreadyExists: true});
    }
  }*/

}
