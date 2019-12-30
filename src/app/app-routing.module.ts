import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PlanView} from '../plan-view/plan-view';
import {PlanList} from '../plan-list/plan-list';
import {PlanNew} from '../plan-new/plan-new';
import {About} from '../about/about';

const routes: Routes = [
  { path: '', redirectTo: 'plans', pathMatch: 'full' },
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
