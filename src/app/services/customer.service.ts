import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { APIURL } from '../../environments/environment.prod';

// const ApiUrl = 'https://localhost:44311/api';

@Injectable()
export class CustomerService {

  constructor(private _http: HttpClient) { }

  getCustomers() {
    console.log("almost")
    return this._http.get(`${APIURL}/Customer`, { headers: this.getHeaders() });
  }

  getCustomer(id: string) {
    return this._http.get(`${APIURL}/Customer/${id}`, { headers: this.getHeaders() });
  }

  createCustomer(customer: Customer) {
    console.log("not yet")
    return this._http.post(`${APIURL}/Customer`, customer, { headers: this.getHeaders() });
  }

  updateCustomer(customer: Customer) {
    return this._http.put(`${APIURL}/Customer`, customer, { headers: this.getHeaders() });
  }

  deleteCustomer(id: number) {
    return this._http.delete(`${APIURL}/Customer/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
