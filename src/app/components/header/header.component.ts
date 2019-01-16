import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this._authService.userInfo.subscribe((d: UserData) => {
      this.username = d.user;
      this.isLoggedIn = d.isloggedin;
  });
}

  onLogout() {
    this._authService.logout();
  }

}
export interface UserData {
  user: string;
  isloggedin: boolean;
}