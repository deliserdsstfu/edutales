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
  childId = this.route.snapshot.paramMap.get('id');
  points;
  finished = false;

  constructor(private childService: ChildService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.childService.getChild(this.route.snapshot.paramMap.get('id')).subscribe(
      (response: any) => {
        this.child = response;
        this.finished = true;
      });
    this.points = localStorage.getItem('points');
  }

  sub() {
    if (localStorage.length === 1) {
      const points = 'points';
      localStorage.setItem(points, String(0));
      const childId = this.route.snapshot.paramMap.get('id');
      const key = 'childId';
      localStorage.setItem(key, childId);
    } else if (localStorage.length > 1 && localStorage.getItem('childId') !== this.childId) {

      const childId = this.route.snapshot.paramMap.get('id');
      const key = 'childId';
      localStorage.setItem(key, childId);

    }

  }
}
