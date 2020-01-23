import {UserService} from './service/user.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'frontend';

  constructor(private userService: UserService, public location: Location) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  isWorldMap() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }
    if ( titlee.includes('/world-map/')) {
      return true;
    } else {
      return false;
    }
  }

  isTaleQuiz() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }
    if ( titlee.includes('/tale-quiz/')) {
      return true;
    } else {
      return false;
    }

  }


  isLogin() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }
    if ( titlee.includes('login')) {
      return true;
    } else {
      return false;
    }

  }
}
