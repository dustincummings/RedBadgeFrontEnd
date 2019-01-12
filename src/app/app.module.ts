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
import { FoodComponent } from './components/food/food.component';
import { FoodsService } from './services/foods.service';
import { FoodIndexComponent } from './components/food/food-index/food-index.component';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { CustomerService } from './services/customer.service';
import { CustomerComponent } from './components/customer/customer.component';
import { FoodCreateComponent } from './components/food/food-create/food-create.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'foods', children:[
    {path: '',component: FoodIndexComponent},
    {path:'create', component: FoodCreateComponent}
  ]},
  { path: 'customers', component: CustomerIndexComponent },
 
]
  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    AlertComponent,
    LoginComponent,
    FoodComponent,
    FoodIndexComponent,
    CustomerIndexComponent,
    CustomerComponent,
    FoodCreateComponent,
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
    FoodsService, 
    CustomerService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
