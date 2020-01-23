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
  displayedColumns = ['first_name', 'last_name', 'language', 'day_of_birth', 'id'];

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
    if (confirm("Sie sind dabei Ihren Account zu löschen. Diese Aktion kann nicht rückgängig gemacht werden, möchten Sie dennoch fortfahren?")) {
      this.parentService.deleteParent(parent)
        .subscribe(() => {
          this.ngOnInit();
        });
      this.userService.logout();
    }
  }

}
