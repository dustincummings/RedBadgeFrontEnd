import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../models/Food';
import { APIURL } from '../../environments/environment.prod';

// const ApiUrl = "https://localhost:44311/api";


@Injectable()
export class FoodsService {

  constructor(private _http:HttpClient) { }

  getFoods(){
    return this._http.get(`${APIURL}api/Food`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
  createFood(food: Food){
    return this._http.post(`${APIURL}api/Food`,food, { headers: this.getHeaders()});
  }
  getFood(id: string){
    return this._http.get(`${APIURL}api/Food/${id}`, { headers: this.getHeaders()});
  }
  updateFood(food:Food){
    return this._http.put(`${APIURL}api/Food`,food, { headers: this.getHeaders()});
  }
  deleteFood(id: number){
    return this._http.delete(`${APIURL}api/Food/${id}`, {headers: this.getHeaders()});
  }

}
