import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-world',
  templateUrl: './map-world.component.html',
  styleUrls: ['./map-world.component.scss']
})
export class MapWorldComponent implements OnInit {

  latitude = 47.06667;
  longitude = 15.45;
  locationChosen = false;

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
