import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { ChartsModule } from 'ng2-charts';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent, Dialogview } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';

import { DataService } from './data.service';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
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
    InstancesComponent,
    Dialogview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  entryComponents: [Dialogview],
  providers: [DataService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class PizzaPartyAppModule { }

