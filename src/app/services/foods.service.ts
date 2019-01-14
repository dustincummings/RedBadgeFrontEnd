import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../models/Food'

const ApiUrl = "https://localhost:44311/api";


@Injectable()
export class FoodsService {

  constructor(private _http:HttpClient) { }

  getFoods(){
    return this._http.get(`${ApiUrl}/Food`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
  createFood(food: Food){
    return this._http.post(`${ApiUrl}/Food`,food, { headers: this.getHeaders()});
  }
  getFood(id: string){
    return this._http.get(`${ApiUrl}/Food/${id}`, { headers: this.getHeaders()});
  }
  updateFood(food:Food){
    return this._http.put(`${ApiUrl}/Food`,food, { headers: this.getHeaders()});
  }
  deleteFood(id: number){
    return this._http.delete(`${ApiUrl}/Food/${id}`, {headers: this.getHeaders()});
  }

}
