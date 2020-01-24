import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ChildService} from '../service/child.service';
import {UserService} from '../service/user.service';
import {ParentService} from '../service/parent.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {

  children: any[];
  displayedColumns = ['user_name', 'year_of_birth', 'game', 'id'];

  constructor(private http: HttpClient, private route: ActivatedRoute, private childService: ChildService, private userService: UserService, private parentService: ParentService) { }


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

  genPDF() {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    this.http.get('/api/generate/pdf/', { headers, responseType: 'blob'}).subscribe((res) => {
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
  }
}
