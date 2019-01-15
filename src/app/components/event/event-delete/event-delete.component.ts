import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { FoodsService } from 'src/app/services/foods.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {
  event:Event;
  foodData: food[] = [];
  customerData: customer[] = [];

  constructor(private _eventService: EventService, private _ar: ActivatedRoute, private _router: Router, private _foodService: FoodsService, private _customerService:CustomerService) {
    this._ar.paramMap.subscribe(p=> {this._eventService.getEvent(p.get('id')).subscribe((singleEvent:Event)=> 
    {this.event = singleEvent;
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

  

  onDelete(){
    this._eventService.deleteEvent(this.event.eventEntityID).subscribe(()=>{
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
