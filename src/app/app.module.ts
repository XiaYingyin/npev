import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PlanView } from '../plan-view/plan-view';
import { PlanList } from '../plan-list/plan-list';
import { PlanNew } from '../plan-new/plan-new';
import { About } from '../about/about';
import { MomentDatePipe, DurationPipe, DurationUnitPipe } from '../pipes'
import { PlanNode } from '../plan-node/plan-node';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from '../home/home.component';
import { PerfTestComponent } from '../perf-test/perf-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from './app-config.service';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, ObservableInput } from '../../node_modules/rxjs';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DeleteDialogComponent } from '../plan-list/modals/delete-dialog.component';

function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http.get('assets/config/config.json')
        .pipe(
          map((x: ConfigService) => {
            config.baseUrl = x.baseUrl;
            resolve(true);
          }),
          catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
            if (x.status !== 404) {
              resolve(false);
            }
            config.baseUrl = 'http://localhost:8080/';
            resolve(true);
            return of({});
          })
        ).subscribe();
    });
  };
}

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
    PerfTestComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppBootstrapModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    ScrollingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [
        HttpClient,
        ConfigService
      ],
      multi: true
    }
  ],
  entryComponents: [DeleteDialogComponent]
})
export class AppModule { }
