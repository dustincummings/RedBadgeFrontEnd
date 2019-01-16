import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { FoodsService } from 'src/app/services/foods.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Event } from 'src/app/models/Event'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  foodData: food;
  customerData: customer;

  constructor(private _activatedRoute: ActivatedRoute, private _eventService: EventService, private _foodService: FoodsService, private _customerService: CustomerService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventService.getEvent(routeData.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
        this._foodService.getFood(this.event.foodID.toString()).subscribe((food: any) => {
          this.foodData = food;


        });
        this._customerService.getCustomer(this.event.custID.toString()).subscribe((customer: any) => {
          this.customerData = customer;
        })
      });
    });
  }
}
export interface food {
  name: string
  id: number
}
export interface customer {
  custFirstName: string
  custLastName: string
  custID: number
}
