import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event: Event;

  editEventForm: FormGroup;
  
  constructor(private _form:FormBuilder,private _eventService: EventService, private _ar:ActivatedRoute,private _router: Router) {
    this._ar.paramMap.subscribe(p =>{
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent:Event) =>{
        this.event = singleEvent;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }
  createForm() {
    this.editEventForm = this._form.group({
      EventEntityID: new FormControl(this.event.eventEntityId),
      OwnerID: new FormControl(this.event.ownerID),
      Location: new FormControl(this.event.location),
      NumberOfPeople: new FormControl(this.event.numberOfPeople),
      FoodId: new FormControl(this.event.foodID),
      AdditionalNotes: new FormControl(this.event.additionalNotes),
      DateOfEvent: new FormControl(this.event.dateofEvent),   
      CustId: new FormControl(this.event.custID), 
    });
  }
  onSubmit(form){
    const updateEvent: Event ={
      eventEntityId: form.value.EventEntityID,
      ownerID: form.value.OwnerID,
      location: form.value.Location,
      numberOfPeople: form.value.NumberOfPeople,
      foodID: form.value.FoodId,
      additionalNotes: form.value.AdditionalNotes,
      dateofEvent: form.value.DateOfEvent,
      custID: form.value.CustID,
    };
    this._eventService.updateEvent(updateEvent).subscribe(d =>{
      this._router.navigate(['/events']);
    });
  }


}