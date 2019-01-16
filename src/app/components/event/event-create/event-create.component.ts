import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service'
import {FormBuilder, FormGroup, FormControl, FormGroupDirective} from '@angular/forms'
import {Router} from '@angular/router'
import { FoodsService } from 'src/app/services/foods.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;
  foodData: food[] = [];
  customerData: customer[] = [];

  constructor(private _eventService: EventService, private _form: FormBuilder, private _router: Router, private _foodService: FoodsService, private _customerService: CustomerService) { this.createForm();}

  ngOnInit() {
    this._foodService.getFoods().subscribe((foods: any[]) => {
      foods.forEach(foodSingle => {
        var foodFormatted: food = {
          name: foodSingle.name,
          id: foodSingle.foodID
        };
        this.foodData.push(foodFormatted)
      });
      this._customerService.getCustomers().subscribe((customers:any[])=>{
        customers.forEach(customerSingle =>{
          var customerFormatted: customer = {
            custFirstName: customerSingle.custFirstName,
            custLastName: customerSingle.custLastName,
            custID: customerSingle.custID
          };
          this.customerData.push(customerFormatted)
        })
      })
    })
  }

  createForm(){
    this.eventForm = this._form.group({
      Location: new FormControl,
      NumberOfPeople: new FormControl,
      FoodID: new FormControl,
      AdditionalNotes: new FormControl,
      DateOfEvent: new FormControl,
      CustID: new FormControl
    });
  }

  onSubmit(){
    console.log(this.eventForm.value)
    this._eventService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/events']);
    });
  }
}

export interface food {
  name: string
  id: number
}
export interface customer{
  custFirstName: string
  custLastName: string
  custID: number
}