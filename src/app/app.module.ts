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
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from '../app/components/login/login.component';
import { CustomerComponent } from '../app/components/customer/customer.component';
import { CustomerService } from './services/customer.service';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FoodCreateComponent } from './components/food/food-create/food-create.component';
import { FoodDetailComponent } from './components/food/food-detail/food-detail.component';
import { FoodEditComponent } from './components/food/food-edit/food-edit.component';
import { FoodDeleteComponent } from './components/food/food-delete/food-delete.component';
import { CommonModule } from '@angular/common';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'customers', children: [
      { path:'', component: CustomerIndexComponent },
      { path:'create', component: CustomerCreateComponent },
      { path:'detail/:id', component: CustomerDetailComponent },
      { path:'update/:id', component: CustomerEditComponent },
      { path:'delete/:id', component: CustomerDeleteComponent },
    ]
  },
  { path: '**', component: RegistrationComponent },
  {path: 'foods', children:[
    {path: '',component: FoodIndexComponent},
    {path:'create', component: FoodCreateComponent},
    {path: 'detail/:id', component: FoodDetailComponent},
    {path: 'edit/:id', component: FoodEditComponent},
    {path: 'delete/:id', component: FoodDeleteComponent}
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
    CustomerComponent,
    CustomerIndexComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    FoodCreateComponent,
    FoodDetailComponent,
    FoodEditComponent,
    FoodDeleteComponent,
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
    MatTableModule
    MatInputModule, 
    MatTableModule, 
    MatSortModule,
    CommonModule
  ],
  providers:[
    AuthService,
    CustomerService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
