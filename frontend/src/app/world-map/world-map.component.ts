import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  latitude = 47.06667;
  longitude = 15.45;
  locationChosen = false;



  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  constructor(private taleService: TaleService, private router: Router) { }


  ngOnInit() {
  }

  getTale(id) {
    this.taleService.getTale(id)
      .subscribe(() => {
        this.router.navigate(['/tale-quiz/' + id ]);
      });
  }


}
