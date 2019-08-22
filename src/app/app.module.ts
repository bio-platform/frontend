import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



import { ChartsModule } from 'ng2-charts';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';

import { DataService } from './data.service';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule }  from '@angular/platform-browser/animations';
import { InstancesComponent } from './instances/instances.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    UserOverviewComponent,
    MessagesComponent,
    NavbarComponent,
    InstancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    MatSidenavModule,
    NoopAnimationsModule,
  ],
  providers: [DataService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

