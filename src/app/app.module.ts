import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { HeaderAdminComponent } from './layout-admin/header-admin/header-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SidebarAdminComponent } from './layout-admin/sidebar-admin/sidebar-admin.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    HeaderAdminComponent,
    DashboardAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
