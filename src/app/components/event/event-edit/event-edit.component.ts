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
      EventEntityID: new FormControl(this.event.EventEntityId),
      OwnerID: new FormControl(this.event.OwnerId),
      Location: new FormControl(this.event.Location),
      NumberOfPeople: new FormControl(this.event.NumberOfPeople),
      FoodId: new FormControl(this.event.FoodId),
      AdditionalNotes: new FormControl(this.event.AdditionalNotes),
      DateTime: new FormControl(this.event.DateTime),   
      CustId: new FormControl(this.event.CustId), 
    });
  }
  onSubmit(form){
    const updateEvent: Event ={
      EventEntityId: form.value.EventEntityId,
      OwnerId: form.value.OwnerID,
      Location: form.value.Location,
      NumberOfPeople: form.value.NumberOfPeople,
      FoodId: form.value.FoodId,
      AdditionalNotes: form.value.AdditionalNotes,
      DateTime: form.value.DateTime,
      CustId: form.value.CustId,
    };
    this._eventService.updateEvent(updateEvent).subscribe(d =>{
      this._router.navigate(['/events']);
    });
  }


}