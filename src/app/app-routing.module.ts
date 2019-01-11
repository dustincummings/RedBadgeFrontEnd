import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component'
import { FoodIndexComponent } from './components/food/food-index/food-index.component';


const routes: Routes = [
  
  {path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerIndexComponent },
  {path: 'foods', component: FoodIndexComponent},
  {path: '**', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
