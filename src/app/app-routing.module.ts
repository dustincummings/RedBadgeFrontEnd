import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component'

const routes: Routes = [
  
  {path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerIndexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
