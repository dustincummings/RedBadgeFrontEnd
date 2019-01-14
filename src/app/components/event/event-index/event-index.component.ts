import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/Event';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {

  constructor( private _eventService : EventService) { }

  columnNames = ['details', 'EventEntityID', 'Location','buttons'];
  
  dataSource: MatTableDataSource<Event>

  @ViewChild(MatSort) sort:MatSort;

  ngOnInit() {
    this._eventService.getEvents().subscribe((events:Event[])=>{
      console.log("hello")
      this.dataSource = new MatTableDataSource<Event>(events);
      this.dataSource.sort=this.sort;
      console.log(this.dataSource)
    });
  }

}
