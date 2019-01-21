import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Admin } from '../models/Admin';
import { Event } from '../models/Event';
import { APIURL } from '../../environments/environment.prod';

// const apiUrl = 'https://localhost:44311'


@Injectable({
    providedIn: 'root'
  })
  export class AdmincontrolService {
  
    constructor(private http: HttpClient) { }
  
    getAll(user: any): Observable<User[]> {
      return this.http.get<User[]>(`${APIURL}/admin/user`)
    }
    getAllevent(event: any): Observable<Event[]> {
      return this.http.get<Event[]>(`${APIURL}/admin/event`)
    }
  
    deleteUser(user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      return this.http.delete<User>(`${APIURL}/admin/user/${id}`).pipe(
        tap(_ => console.log(`deleted user id=${id}`)),
        //   catchError(this.handleError<any>('deleteProduct'))
      );
    }
    deleteEvent(event: Event | number): Observable<Event> {
      const id = typeof event === 'number' ? event : event.eventEntityID;
      return this.http.delete<Event>(`${APIURL}/admin/event/${id}`).pipe(
        tap(_ => console.log(`deleted event entity id=${id}`)),
        //   catchError(this.handleError<any>('deleteProduct'))
      );
    }
    logout() {
      localStorage.clear();
    }
  }
  