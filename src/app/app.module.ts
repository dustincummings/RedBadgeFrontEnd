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
  MatInputModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from '../app/components/login/login.component';
import { EventService } from './services/event.service';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventComponent } from './components/event/event.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'event', component: EventIndexComponent },
]
  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    AlertComponent,
    LoginComponent,
    EventIndexComponent,
    EventComponent,
   
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
    MatInputModule
  ],
  providers:[
    AuthService,
    EventService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
