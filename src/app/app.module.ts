import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HomepageComponent } from '../app/components/homepage/homepage.component';

import { EventComponent } from './components/event/event.component';
import { EventService } from '../app/services/event.service';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';

import { CustomerComponent } from '../app/components/customer/customer.component';
import { CustomerService } from './services/customer.service';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { FoodComponent } from './components/food/food.component';
import { FoodsService } from './services/foods.service';
import { FoodIndexComponent } from './components/food/food-index/food-index.component';
import { FoodCreateComponent } from './components/food/food-create/food-create.component';
import { FoodDetailComponent } from './components/food/food-detail/food-detail.component';
import { FoodEditComponent } from './components/food/food-edit/food-edit.component';
import { FoodDeleteComponent } from './components/food/food-delete/food-delete.component';
import { CommonModule } from '@angular/common';


const routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  {path: 'events', children:[
    {path: '',component: EventIndexComponent},
    {path: 'create',component: EventCreateComponent},
    {path: 'details/:id',component: EventDetailsComponent},
    {path: 'edit/:id',component: EventEditComponent},
    {path: 'delete/:id',component: EventDeleteComponent}
  ]},

  { 
    path: 'customers', children: [
      { path:'', component: CustomerIndexComponent },
      { path:'create', component: CustomerCreateComponent },
      { path:'detail/:id', component: CustomerDetailComponent },
      { path:'edit/:id', component: CustomerEditComponent },
      { path:'delete/:id', component: CustomerDeleteComponent },
    ]
  },
  {path: 'foods', children:[
    {path: '',component: FoodIndexComponent},
    {path:'create', component: FoodCreateComponent},
    {path: 'detail/:id', component: FoodDetailComponent},
    {path: 'edit/:id', component: FoodEditComponent},
    {path: 'delete/:id', component: FoodDeleteComponent}
  ]},
  { path: '**', component: HomepageComponent },

]

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomepageComponent,
    AlertComponent,
    LoginComponent,
    EventComponent,
    EventIndexComponent,
    EventCreateComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventDeleteComponent,
    CustomerComponent,
    CustomerIndexComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    FoodComponent,
    FoodCreateComponent,
    FoodDetailComponent,
    FoodEditComponent,
    FoodDeleteComponent,
    FoodIndexComponent,


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
    MatSortModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
  ],
  
  providers:[
    AuthService,
    CustomerService,
    FoodsService,
    EventService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }