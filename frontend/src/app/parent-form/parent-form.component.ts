import { Component, OnInit } from '@angular/core';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ChildListComponent} from '../child-list/child-list.component';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})

export class ParentFormComponent implements OnInit {

  parentFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private parentService: ParentService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;

    this.parentFormGroup = this.fb.group({
      'id': [null],
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'region': [null],
      'year_of_birth': [1, Validators.max(2000)],
      'children': [null]
    });

    if (data.parent) {
      this.parentFormGroup.patchValue(data.parent);
    }
  }

  createParent() {
    const parent = this.parentFormGroup.value;
    if (parent.id) {
      this.parentService.updateParent(parent)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.parentService.createParent(parent)
        .subscribe((response: any) => {
          this.router.navigate(['/parent-form/' + response.id]);
        });
    }
  }
}
