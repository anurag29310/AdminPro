import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { HeaderAdminComponent } from './layout-admin/header-admin/header-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './layout-admin/sidebar-admin/sidebar-admin.component';
import {ChartsAdminComponent} from './charts-admin/charts-admin.component';
import {UsersAdminComponent} from './users-admin/users-admin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    HeaderAdminComponent,
    DashboardAdminComponent,
     SidebarAdminComponent,
     ChartsAdminComponent,
     UsersAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
