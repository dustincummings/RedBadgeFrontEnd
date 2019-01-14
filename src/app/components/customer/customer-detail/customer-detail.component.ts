import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;

  constructor(private _activatedRoute: ActivatedRoute, private _customerService: CustomerService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._customerService.getCustomer(routeData.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
      });
    });
  }
}
