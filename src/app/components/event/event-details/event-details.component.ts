import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  event: Event;

  constructor(private _activatedRoute: ActivatedRoute, private _eventService: EventService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventService.getEvent(routeData.get('id')).subscribe((singleEvent:Event) => {
        this.event =singleEvent;
      })
    })
  }

}
