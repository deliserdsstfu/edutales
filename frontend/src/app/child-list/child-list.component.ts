import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildService} from '../service/child.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {

  children: any[];
  displayedColumns = ['user_name', 'year_of_birth', 'id'];

  constructor(private http: HttpClient, private childService: ChildService) { }

  ngOnInit() {
    this.childService.getChildren()
        .subscribe((response: any[]) => {
          this.children = response;
        });
  }

  deleteChild(child) {
    this.childService.deleteChild(child)
        .subscribe(() => {
          this.ngOnInit();
        });
  }

}
