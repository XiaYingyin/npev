import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

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
      MatTreeModule,
      MatIconModule,
      MatButtonModule,
      MatSidenavModule,
      MatMenuModule,
      MatToolbarModule,
      MatTooltipModule,
      MatRadioModule,
      MatTabsModule,
      MatDialogModule,
      MatInputModule,
      MatChipsModule
   ]
})
export class ExtensionModule { }
