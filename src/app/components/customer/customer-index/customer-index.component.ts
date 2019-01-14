import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Customer';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  columnNames = ['CustLastName', 'CustFirstName']

  dataSource: MatTableDataSource<Customer>

  ngOnInit() {
    this._customerService.getCustomers().subscribe((customers: any) => {
      this.dataSource = new MatTableDataSource<Customer>(customers);
      console.log(this.dataSource)
    })
  }
}
