import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Event} from '../models/Event'

const ApiUrl = "https://localhost:44311/api";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http:HttpClient) { }

  getEvents(){
    return this._http.get(`${ApiUrl}/Event`, {headers: this.getHeaders()});
  }
  createEvent(event:Event){
    return this._http.post(`${ApiUrl}/Event`, event, {headers: this.getHeaders()});
  }
  getEvent(id:string){
    return this._http.get(`${ApiUrl}/Event/${id}`, {headers: this.getHeaders()});
  }
  updateEvent(event:Event){
    return this._http.put(`${ApiUrl}/Event`, {headers: this.getHeaders()});
  }
  deleteEvent(id:number){
    return this._http.get(`${ApiUrl}/Event/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }

}
