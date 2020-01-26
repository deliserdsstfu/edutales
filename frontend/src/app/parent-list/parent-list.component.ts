import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';
import {ChildService} from '../service/child.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {

  parents: any[] = [];
  displayedColumns = ['first_name', 'last_name', 'language_language', 'day_of_birth', 'id'];
  languageOptions;

  constructor(private http: HttpClient, private router: Router, private parentService: ParentService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const currId = this.userService.getCurrentId();
    this.languageOptions = this.route.snapshot.data.languageOptions;
    this.parentService.getParent(currId)
      .subscribe((response: any) => {
        this.parents.push(response);
        const language = this.languageOptions[0].language;
        this.parents[0].language = language;
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
