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
          year_of_birth: [90, [Validators.max(3000)]],
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
                    this.router.navigate(['/user-profile/']);
                });
        }


}
}




