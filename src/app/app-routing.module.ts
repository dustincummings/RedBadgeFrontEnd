import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component'
import { FoodIndexComponent } from './components/food/food-index/food-index.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmincontrolComponent } from './components/admincontrol/admincontrol.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';


const routes: Routes = [
  
  { path: 'home', component: HomepageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerIndexComponent },
  { path: 'foods', component: FoodIndexComponent },
  { path: 'events', component: EventIndexComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomepageComponent },
  { path: 'admin', component: AdminComponent },
  { path:'admincontrol', component: AdmincontrolComponent, data: {title: 'Admin Control'}, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
