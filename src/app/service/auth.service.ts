import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';

const Api_Url = "https://localhost:44311/api/Auth/";

@Injectable()
export class AuthService {
  _http: any;
  

login(loginInfo) {
  const str =
  `grant_type=password&username=$encodeURI(loginInfo.email))&password=${encodeURI(loginInfo.password)}`
} 
  constructor() { }

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Account/Register`,regUserData);

  }
}