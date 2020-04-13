import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {RegisterAdminComponent} from './register-admin/register-admin.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {ChartsAdminComponent} from './charts-admin/charts-admin.component';
import {UsersAdminComponent} from './users-admin/users-admin.component';


const routes: Routes=[
  {path: '', redirectTo: '/signupadmin', pathMatch:'full'},   
  {path: 'registeradmin', component: RegisterAdminComponent},
  {path: 'signupadmin', component: LoginAdminComponent}, 
  {path: 'dashboardadmin', component: DashboardAdminComponent},
  {path: 'chartsadmin', component: ChartsAdminComponent}, 
  {path: 'usersadmins', component: UsersAdminComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
