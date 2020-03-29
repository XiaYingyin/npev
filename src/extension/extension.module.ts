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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { ExtTestComponent } from './ext-test/ext-test.component';

@NgModule({
   declarations: [
      ExtHomeComponent,
      ExtensionComponent,
      ExtDetailComponent,
      ExtListComponent,
      ExtSelectComponent,
      ExtIntroComponent,
      ExtChartComponent,
      ExtTestComponent
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
      MatChipsModule,
      MatAutocompleteModule
   ]
})
export class ExtensionModule { }
