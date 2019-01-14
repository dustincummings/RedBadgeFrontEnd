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
      Food: new FormControl(this.event.Food),
      AdditionalNotes: new FormControl(this.event.AdditionalNotes),   
    });
  }
  onSubmit(form){
    const updateEvent: Event ={
      EventEntityId: form.value.EventEntityId,
      OwnerId: form.value.OwnerID,
      Location: form.value.Location,
      NumberOfPeople: form.value.NumberOfPeople,
      Food: form.value.Food,
      AdditionalNotes: form.value.AdditionalNotes,
    };
    this._eventService.updateEvent(updateEvent).subscribe(d =>{
      this._router.navigate(['/events']);
    });
  }


}