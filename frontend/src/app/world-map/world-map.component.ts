import {Component, OnInit} from '@angular/core';
import {TaleService} from '../service/tale.service';
import {Router} from '@angular/router';
import {HistoryService} from '../service/history.service';
import {UserService} from '../service/user.service';
import {ChildService} from '../service/child.service';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  latitude = 47.06667;
  longitude = 15.45;
  locationChosen = false;
  previous;

  constructor(private taleService: TaleService, private router: Router,
              private historyService: HistoryService, private userService: UserService) {
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }


  constructor(private taleService: TaleService, private router: Router, private historyService: HistoryService, private childService: ChildService
  ) { }

  ngOnInit() {
  }

  getTale(id) {
    this.taleService.getTale(id)
      .subscribe(() => {
        this.router.navigate(['/tale-quiz/' + id]);
      });
  }

  getHistory(id) {
    this.historyService.getHistory(id)
      .subscribe(() => {
        this.router.navigate(['history-quiz/' + id]);
      });
  }

  getCurrChild(id) {
    this.childService.getChild(id)
      .subscribe( () => {
        this.router.navigate(['/api/child/' + id + '/get']);
      });
  }

}
