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
      custID: new FormControl(this.customer.custID),
      custFirstName: new FormControl(this.customer.custFirstName),
      custLastName: new FormControl(this.customer.custLastName),
      custEmail: new FormControl(this.customer.custEmail),
      custPhone: new FormControl(this.customer.custPhone),
      custAddress: new FormControl(this.customer.custAddress),
      custCityStZip: new FormControl(this.customer.custCityStZip)
    });
  }

  onSubmit(form) {
    const updateCustomer: Customer = {
      custID: form.value.custID,
      custFirstName: form.value.custFirstName,
      custLastName: form.value.custLastName,
      custEmail: form.value.custEmail,
      custPhone: form.value.custPhone,
      custAddress: form.value.custAddress,
      custCityStZip: form.value.custCityStZip
    };
    this._customerService.updateCustomer(updateCustomer).subscribe(d => {
      this._router.navigate(['/customers']);
    });
  }
}
