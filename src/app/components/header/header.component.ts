import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;

  constructor(private _authService: AuthService, private _router: Router, ) {}
  

  ngOnInit() {
    this._authService.isLoggedIn.subscribe((loggedInUserStatus: boolean) =>{
    this.isLoggedIn = loggedInUserStatus;
    });
}

  onLogout() {
    this._authService.logout();
    this.isLoggedIn =false;
    this._router.navigate(['/login']);
  }

}
export interface UserData {
  user: string;
  isLogedIn: boolean;
}