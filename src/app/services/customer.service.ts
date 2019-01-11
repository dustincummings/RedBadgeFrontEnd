import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://localhost:44311';

@Injectable()
export class CustomerService {

  constructor(private _http: HttpClient) { }

  getCustomers() {
    return this._http.get(`${ApiUrl}/api/Customer`, { headers: this.getHeaders() });
  }

  // createCustomer(customer: Customer){
  //   return this._http.post(`${ApiUrl}/api/Customer`, customer, { headers: this.getHeaders()});
  // }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
