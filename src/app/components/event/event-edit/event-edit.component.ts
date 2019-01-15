import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodsService } from 'src/app/services/foods.service';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event: Event;
  foodData: food[] = [];
  customerData: customer[] = [];

  editEventForm: FormGroup;
  
  constructor(private _form:FormBuilder,private _eventService: EventService, private _ar:ActivatedRoute,private _router: Router, private _foodService: FoodsService, private _customerService: CustomerService) {
    this._ar.paramMap.subscribe(p =>{
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent:Event) =>{
        this.event = singleEvent;
        this.createForm();
      });
    });
   }

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
  createForm() {
    this.editEventForm = this._form.group({
      EventEntityID: new FormControl(this.event.eventEntityID),
      OwnerID: new FormControl(this.event.ownerID),
      Location: new FormControl(this.event.location),
      NumberOfPeople: new FormControl(this.event.numberOfPeople),
      FoodID: new FormControl(this.event.foodID),
      AdditionalNotes: new FormControl(this.event.additionalNotes),
      DateOfEvent: new FormControl(this.event.dateOfEvent),   
      CustID: new FormControl(this.event.custID), 
    });
  }
  onSubmit(form){
    const updateEvent: Event ={
      eventEntityID: form.value.EventEntityID,
      ownerID: form.value.OwnerID,
      location: form.value.Location,
      numberOfPeople: form.value.NumberOfPeople,
      foodID: form.value.FoodID,
      additionalNotes: form.value.AdditionalNotes,
      dateOfEvent: form.value.DateOfEvent,

      custID: form.value.CustID,
    };
    this._eventService.updateEvent(updateEvent).subscribe(d =>{
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