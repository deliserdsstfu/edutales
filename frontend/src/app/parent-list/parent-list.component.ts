import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {

  parents: any[] = [];
  displayedColumns = ['first_name', 'last_name', 'id'];

  constructor(private http: HttpClient, private parentService: ParentService, private userService: UserService) { }

  ngOnInit() {
    const currId = this.userService.getCurrentId();
    this.parentService.getParent(currId)
      .subscribe((response: any) => {
        this.parents.push(response);
        console.log(this.parents);
      });
  }

  deleteParent(parent) {
    this.parentService.deleteParent(parent)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
