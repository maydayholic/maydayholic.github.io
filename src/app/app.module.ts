import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { D3Service, D3_DIRECTIVES } from './d3';
import { SHARED_VISUALS } from './visuals/shared';
import { Sheet1Component } from './sheet1/sheet1.component';
import { GraphComponent } from './visuals/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DashboardComponent,
    Sheet1Component,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
