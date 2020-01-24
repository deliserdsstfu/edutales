import { Component, OnInit } from '@angular/core';
import {ChildService} from '../service/child.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.scss']
})
export class ChildProfileComponent implements OnInit {

  child;
  childId = localStorage.getItem('childId');
  points;
  finished = false;

  constructor(private childService: ChildService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.length === 1) {
      const points = 'points';
      localStorage.setItem(points, String(0));
      const childId = this.route.snapshot.paramMap.get('id');
      const key = 'childId';
      localStorage.setItem(key, childId);
    }
    this.childService.getChild(localStorage.getItem('childId')).subscribe(
      (response: any) => {
        this.child = response;
        this.finished = true;
      });
    this.points  = localStorage.getItem('points');
  }

}
