import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParentService} from '../service/parent.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {

  parents: any[];
  displayedColumns = ['first_name', 'id'];

  constructor(private http: HttpClient, private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getParents()
      .subscribe((response: any[]) => {
        this.parents = response;
      });
  }

  deleteParent(parent) {
    this.parentService.deleteParent(parent)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
