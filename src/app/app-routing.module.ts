import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {RegisterAdminComponent} from './register-admin/register-admin.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';

const routes: Routes=[
  {path: 'registeradmin', component: RegisterAdminComponent},
  {path: 'signupadmin', component: LoginAdminComponent}, 
  {path:'dashboardadmin', component: DashboardAdminComponent},
  {path: '', redirectTo: '/signupadmin', pathMatch:'full'},   
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
