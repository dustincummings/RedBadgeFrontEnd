import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private _customerService: CustomerService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.customerForm = this._form.group({
      custFirstName: new FormControl,
      custLastName: new FormControl,
      custEmail: new FormControl,
      custPhone: new FormControl,
      custAddress: new FormControl,
      custCityStZip: new FormControl,
    })
  }

  onSubmit() {
    this._customerService.createCustomer(this.customerForm.value).subscribe(data => {
      this._router.navigate(['/customers']);
    })
  }

}
