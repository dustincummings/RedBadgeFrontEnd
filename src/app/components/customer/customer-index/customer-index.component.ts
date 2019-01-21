import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Customer';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  columnNames = ['details', 'custLastName', 'custFirstName', 'custEmail', 'buttons']

  dataSource: MatTableDataSource<Customer>= new MatTableDataSource([]);
  sort;
  @ViewChild(MatSort) set content(content:ElementRef){
    this.sort =content;
    if (this.sort){
       this.dataSource.sort=this.sort;}
  }
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  setDataSourceAttributes(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    console.log("hello")
    this._customerService.getCustomers().subscribe((customers: any) => {
      this.dataSource = new MatTableDataSource<Customer>(customers);
    })
  }
}
