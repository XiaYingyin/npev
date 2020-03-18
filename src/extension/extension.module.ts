import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ExtensionComponent } from './extension/extension.component';
import { ExtHomeComponent } from './ext-home/ext-home.component';
import { ExtensionRoutingModule } from './extension-routing.module';
import { ExtDetailComponent } from './ext-detail/ext-detail.component';
import { ExtListComponent } from './ext-list/ext-list.component';
import { ExtSelectComponent } from './ext-select/ext-select.component';
import { ExtIntroComponent } from './ext-intro/ext-intro.component';
import { ExtChartComponent } from './ext-chart/ext-chart.component';
import { ChartsModule } from 'ng2-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
   declarations: [
      ExtHomeComponent,
      ExtensionComponent,
      ExtDetailComponent,
      ExtListComponent,
      ExtSelectComponent,
      ExtIntroComponent,
      ExtChartComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ExtensionRoutingModule,
      ChartsModule,
      MatProgressSpinnerModule,
   ]
})
export class ExtensionModule { }
