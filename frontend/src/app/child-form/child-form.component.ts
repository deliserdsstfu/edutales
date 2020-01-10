import { Component, OnInit } from '@angular/core';
import {ChildService} from '../service/child.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-child-form',
    templateUrl: './child-form.component.html',
    styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent implements OnInit {

    childFormGroup;


    constructor(private fb: FormBuilder, private childService: ChildService, private route: ActivatedRoute,
                private router: Router) {
    }

  ngOnInit() {

      const data = this.route.snapshot.data;

      this.childFormGroup = this.fb.group({
          id: [null],
          user_name: ['', [Validators.required]],
          day_of_birth: [90, [Validators.max(18)]],
      });

      if (data.child) {
          this.childFormGroup.patchValue(data.child);
      }
  }
    // tslint:disable-next-line:one-line
    createChild(){
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
    user_nameValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            return this.childService.getBooks()
                .pipe(
                    map((childs: any[]) => {
                        const currentId = this.childFormGroup.controls.id.value;
                        const currentUser_Name = this.childFormGroup.controls.user_name.value;
                        const childWithSameUser_Name = childs.find((m) => {
                            return (currentId || m.id !== currentId) && m.title === currentUser_Name;
                        });
                        if (childWithSameUser_Name) {
                            return {
                                titleAlreadyExists: true
                            };
                        } else {
                            return null;
                        }
                    })
                );
        };
    }

}



