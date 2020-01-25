import {Component, OnInit} from '@angular/core';
import {TaleService} from '../service/tale.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HistoryService} from '../service/history.service';
import {UserService} from '../service/user.service';
import {ChildService} from '../service/child.service';
import {ParentService} from '../service/parent.service';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  lat: number;
  lng: number;

  previous;
  parent;
  progress;


  constructor(private route: ActivatedRoute, private taleService: TaleService,
              private parentService: ParentService, private childService: ChildService,
              private router: Router, private historyService: HistoryService,
              private userService: UserService) { }



  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });
    }
  }

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private taleService: TaleService, private parentService: ParentService, private childService: ChildService, private router: Router, private historyService: HistoryService, private userService: UserService) { }

  ngOnInit() {
    this.getUserLocation();

    this.progress = parseInt(localStorage.getItem('points'), 10);
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


}
