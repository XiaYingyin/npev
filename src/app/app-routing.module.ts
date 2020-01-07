import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PlanView} from '../plan-view/plan-view';
import {PlanList} from '../plan-list/plan-list';
import {PlanNew} from '../plan-new/plan-new';
import {About} from '../about/about';
import { HomeComponent } from '../home/home.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlanList},
  { path: 'plans/new', component: PlanNew },
  { path: 'plans/:id', component: PlanView },
  { path: 'about', component: About}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
