import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PlanView} from '../plan-view/plan-view';
import {PlanList} from '../plan-list/plan-list';
import {PlanNew} from '../plan-new/plan-new';
import {About} from '../about/about';
import {MomentDatePipe, DurationPipe, DurationUnitPipe} from '../pipes'
import { PlanNode } from '../plan-node/plan-node';

@NgModule({
  declarations: [
    AppComponent,
    PlanList,
    PlanNew,
    PlanView,
    About,
    MomentDatePipe,
    DurationPipe,
    DurationUnitPipe,
    PlanNode
],
imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
],
providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
