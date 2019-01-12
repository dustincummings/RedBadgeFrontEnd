import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "https://localhost:44311";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http:HttpClient) { }

  getEvents(){
    return this._http.get(`${ApiUrl}/api/Event`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }

}
