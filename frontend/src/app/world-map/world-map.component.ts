import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  latitude = 51.678418;
  longitude = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
