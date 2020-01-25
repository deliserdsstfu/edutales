import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../service/user.service';
import {ChildService} from '../service/child.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private childService: ChildService) {
  }



  ngOnInit() {
  }

  logout() {
    this.childService.getChild(localStorage.getItem('childId')).subscribe((child: any) => {
      child.tale = [];
      this.childService.updateChild(child).subscribe((r) => {
        this.userService.logout();
      });
    });
  }
}
