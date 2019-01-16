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
  event: Event;
  foodData: food;
  customerData: customer;

  constructor(private _eventService: EventService, private _ar: ActivatedRoute, private _router: Router, private _foodService: FoodsService, private _customerService: CustomerService) {
  }

  ngOnInit() {
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent: Event) => {
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

  onDelete() {

    this._eventService.deleteEvent(this.event.eventEntityID).subscribe(() => {
      this._router.navigate(['/events']);
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
