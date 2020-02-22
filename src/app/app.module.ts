import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PlanView} from '../plan-view/plan-view';
import {PlanList} from '../plan-list/plan-list';
import {PlanNew} from '../plan-new/plan-new';
import {About} from '../about/about';
import {MomentDatePipe, DurationPipe, DurationUnitPipe} from '../pipes'
import { PlanNode } from '../plan-node/plan-node';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from '../home/home.component';
import { PerfTestComponent } from '../perf-test/perf-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      PlanNode,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      PerfTestComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      AppBootstrapModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
