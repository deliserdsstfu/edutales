import { Component, OnInit } from '@angular/core';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {


    parents: any[];
    displayedColumns = ['user', 'year_of_birth', 'region', 'children'];

    constructor(private parentService: ParentService, public userService: UserService) {
    }

    ngOnInit() {
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
}
