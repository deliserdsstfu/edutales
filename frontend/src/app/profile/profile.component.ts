import { Component, OnInit } from '@angular/core';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    profileFormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
                private router: Router, private parentService: ParentService) {
    }

    ngOnInit() {
        const data = this.route.snapshot.data;

        this.profileFormGroup = this.fb.group({
            'id': [null],
            'first_name': ['', Validators.required],
            'last_name': ['', Validators.required],
            'region': [null],
            'year_of_birth': [1, Validators.max(2000)],
            'children': [null]
        });

        if (data.parent) {
            this.profileFormGroup.patchValue(data.parent);
        }
    }

    createParent() {
        const parent = this.profileFormGroup.value;
        if (parent.id) {
            this.parentService.updateParent(parent)
                .subscribe(() => {
                    alert('updated successfully');
                });
        } else {
            this.parentService.createParent(parent)
                .subscribe((response: any) => {
                    this.router.navigate(['/user-profile/' + response.id]);
                });
        }
    }
}
