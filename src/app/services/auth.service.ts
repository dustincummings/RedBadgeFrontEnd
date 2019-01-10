import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '../models/token';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

const Api_Url = "https://localhost:44311";

@Injectable()
export class AuthService {
  
  userInfo:Token;
  isLoggedIn = new Subject<boolean>();
  
constructor(private _http: HttpClient, private _router: Router) { }

login(loginInfo) {
  return this._http.post(`${Api_Url}/Login`, loginInfo).subscribe( (token: any) => {
    console.log(token);
    localStorage.setItem('id_token',token.token);
  });
}
currentUser(): Observable<Object> {
  if (!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false)); }
  const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  return this._http.get(`${Api_Url}/api/Account/UserInfo`, {headers: this.setHeader() });
}

logout() {
  localStorage.clear();
  this.isLoggedIn.next(false);
const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader() });
this._router.navigate(['/login']);
}
private setHeader(): HttpHeaders {
return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Auth/Register`,regUserData);
  }
}