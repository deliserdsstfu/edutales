import {UserService} from './service/user.service';
import {Component, OnInit, ElementRef, ChangeDetectorRef, NgZone} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'frontend';
  opened = false;

  mdq: MediaQueryList;
  mediaQueryListener: () => void;



  constructor(private userService: UserService, public location: Location, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private ngZone: NgZone) {
    this.mdq = media.matchMedia('(max-width: 992px)');
    this.mediaQueryListener = () =>  this.ngZone.run(() => changeDetectorRef.detectChanges());
    this.mdq.addListener(this.mediaQueryListener);
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

  isWelcome() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }
    if ( titlee.includes('/welcome')) {
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
  isHistoryQuiz() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }
    if ( titlee.includes('/history-quiz/')) {
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
