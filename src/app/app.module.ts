import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectionListComponent } from './section-list/section-list.component';

import { ChartModule } from 'angular2-highcharts';
import { ChartsComponent } from './charts/charts.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DashboardComponent,
    SectionListComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ChartModule.forRoot('highcharts'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
