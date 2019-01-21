import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '../models/Token';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

const Api_Url = "https://localhost:44311/";

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}api/Auth/Register`, regUserData);
  }
  login(loginInfo) {
    return this._http.post(`${Api_Url}api/Auth/login`, loginInfo).subscribe((token: any) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/home']);
    });
  }
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
    return this._http.get(`${Api_Url}/Account/UserInfo`, { headers: this.setHeader() });
  }


  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._http.post(`${Api_Url}/Account/Logout`, { headers: this.setHeader() });
    this._router.navigate(['/home']);

  }
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}