import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  constructor(private _activatedRoute: ActivatedRoute, private _customerService: CustomerService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._customerService.getCustomer(routeData.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
      });
    });
  }
  
  onDelete() {
    this._customerService.deleteCustomer(this.customer.custID).subscribe(() => {
      this._router.navigate(['/customers']);
    });
  }
}
