import { Component, OnInit } from '@angular/core';
import {ParentService} from '../service/parent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  parentFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private parentService: ParentService) { }
  ngOnInit() {
    this.parentFormGroup = this.fb.group({
      'id': [null],
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'region': [null],
      'year_of_birth': [1, Validators.max(2000)],
      'children': [null]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/parent/' + id + '/get')
          .subscribe((response) => {
            this.parentFormGroup.patchValue(response, {emitEvent: false});
          });
    }
  }
  createParent() {
    const parent = this.parentFormGroup.value;
    /*if (parent.id) {
      this.parentService.updateParent(parent)
          .subscribe(() => {
            this.router.navigate(['/login/' + parent.id]);
          });
    } else {*/
      this.parentService.createParent(parent)
          .subscribe(() => {
            this.router.navigate(['/login/']);
          });
    }

}
