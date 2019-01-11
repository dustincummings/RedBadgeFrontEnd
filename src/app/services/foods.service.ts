import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "https://localhost:44311";


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private _http:HttpClient) { }

  getFoods(){
    return this._http.get(`${ApiUrl}/api/Food`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }

}
