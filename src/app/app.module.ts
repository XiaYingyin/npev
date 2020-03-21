import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
import { ConfigService } from './app-config.service';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, ObservableInput } from '../../node_modules/rxjs';

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
  ]
})
export class AppModule { }
