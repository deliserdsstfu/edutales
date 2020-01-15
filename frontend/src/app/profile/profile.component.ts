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
    test: Date = new Date();
    focus;
    focus1;
    parentFormGroup;
    parents: any[];
    displayedColumns = ['user', 'year_of_birth', 'region', 'children'];

    constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
                private router: Router, private parentService: ParentService, public userService: UserService) {
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

        this.parentService.getParents()
            .subscribe((response: any[]) => {
                this.parents = response;
            });
    }

    deleteParent(parent: any) {
        this.parentService.deleteParent(parent)
            .subscribe(() => {
                this.ngOnInit();
            });
    }

    createParent() {
        const parent = this.parentFormGroup.value;
        if (parent.id) {
            this.parentService.updateParent(parent)
                .subscribe(() => {
                    this.router.navigate(['/user-profile/' + parent.id]);
                });
        }

    }
}


