import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api_Url = "https://localhost:44311";

@Injectable()
export class AuthService {

login(loginInfo) {
  const str =
  `grant_type=password&username=$encodeURI(loginInfo.email))&password=${encodeURI(loginInfo.password)}`
} 
  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Auth/Register`,regUserData);
  }
}