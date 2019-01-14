import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from '../app/components/login/login.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from '../app/services/event.service';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'events', children:[
    {path: '',component: EventIndexComponent},
    {path: 'create',component: EventCreateComponent},
    {path: 'details/;id',component: EventDetailsComponent}
  ]},
]
  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    AlertComponent,
    LoginComponent,
    EventComponent,
    EventIndexComponent,
    EventCreateComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule, 
    MatSortModule
  ],
  providers:[
    AuthService, 
   EventService
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }