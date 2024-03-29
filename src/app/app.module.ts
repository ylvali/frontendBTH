import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportComponent } from './reports/report.component';
import { Report2Component } from './report2/report2.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiConnectComponent } from './api-connect/api-connect.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportAPIComponent } from './report-api/report-api.component';
import { SeeReportsComponent } from './see-reports/see-reports.component';

import { ChatComponent } from './chat/chat.component'; //chat
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'; //chat
const config: SocketIoConfig = { url: 'https://chat-server.ysojs.se', options: {} }; //chat

const appRoutes: Routes = [
  { path: 'reports/week/1', component: ReportComponent },
  { path: 'reports/week/2', component: Report2Component },
  { path: '', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'api', component: ApiConnectComponent},
  { path: 'reportApi', component: ReportAPIComponent},
  { path: 'seeReports', component: SeeReportsComponent },
  { path: 'chat', component: ChatComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    Report2Component,
    AboutComponent,
    FormComponent,
    ApiConnectComponent,
    LoginComponent,
    ReportsComponent,
    ReportAPIComponent,
    SeeReportsComponent,
    ChatComponent //chat
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true }
    ),
    BrowserModule, //chat
    SocketIoModule.forRoot(config) //chat
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
