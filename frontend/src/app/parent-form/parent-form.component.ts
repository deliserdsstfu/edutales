import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
  }

}
