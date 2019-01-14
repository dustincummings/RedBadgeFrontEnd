import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  editCustomerForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _customerService: CustomerService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._customerService.getCustomer(p.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editCustomerForm = this._form.group({
      CustID: new FormControl(this.customer.CustID),
      CustFirstName: new FormControl(this.customer.CustFirstName),
      CustLastName: new FormControl(this.customer.CustLastName),
      CustEmail: new FormControl(this.customer.CustEmail),
      CustPhone: new FormControl(this.customer.CustPhone),
      CustAddress: new FormControl(this.customer.CustAddress),
      CustCityStZip: new FormControl(this.customer.CustCityStZip)
    });
  }

  onSubmit(form) {
    const updateCustomer: Customer = {
      CustID: form.value.CustID,
      CustFirstName: form.value.CustFirstName,
      CustLastName: form.value.CustLastName,
      CustEmail: form.value.CustEmail,
      CustPhone: form.value.CustPhone,
      CustAddress: form.value.CustAddress,
      CustCityStZip: form.value.CustCityStZip
    };
    this._customerService.updateCustomer(updateCustomer).subscribe(d => {
      this._router.navigate(['/customers']);
    });
  }
}
