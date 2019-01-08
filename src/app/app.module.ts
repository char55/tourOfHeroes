import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportDetailComponent } from './reports/report-detail/report-detail.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { RightclickComponent } from './rightclick/rightclick.component';
import 'hammerjs';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { PrintLayoutComponent } from './reports/print-layout/print-layout.component';
import { InvoiceComponent } from './reports/invoice/invoice.component';
import { PrintService } from './reports/print.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ReportsComponent,
    ReportDetailComponent,
    ScrollingComponent,
    RightclickComponent,
    PrintLayoutComponent,
    InvoiceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    // FontAwesomeModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
