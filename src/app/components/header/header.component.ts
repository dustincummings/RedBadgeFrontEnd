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
  isLoggedIn: any;

  constructor(private _authService: AuthService, private _router: Router, private _jwtHelper: JwtHelperService) {
    if (localStorage.getItem('id_token') !== null){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn =false;

    }
   }

  ngOnInit() {
   this.username = this._jwtHelper.decodeToken(localStorage.getItem('id_token')).unique_name
}

  onLogout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}
export interface UserData {
  user: string;
  isLogedIn: boolean;
}