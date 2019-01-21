import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Event} from '../models/Event';
import { APIURL } from '../../environments/environment.prod';

// const ApiUrl = "https://localhost:44311/api";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http:HttpClient) { }

  getEvents(){
    return this._http.get(`${APIURL}/Event`, {headers: this.getHeaders()});
  }
  createEvent(event:Event){
    return this._http.post(`${APIURL}/Event`, event, {headers: this.getHeaders()});
  }
  getEvent(id:string){
    return this._http.get(`${APIURL}/Event/${id}`, {headers: this.getHeaders()});
  }
  updateEvent(event:Event){
    return this._http.put(`${APIURL}/Event`, event, {headers: this.getHeaders()});
  }
  deleteEvent(id:number){
    return this._http.delete(`${APIURL}/Event/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }

}
