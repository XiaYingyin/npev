import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {PlanView} from '../plan-view/plan-view';
import {PlanList} from '../plan-list/plan-list';
import {PlanNew} from '../plan-new/plan-new';
import {About} from '../about/about';
import { HomeComponent } from '../home/home.component'
import { PerfTestComponent } from "../perf-test/perf-test.component";
import { ExtensionComponent } from "../extension/extension/extension.component";

const eroutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlanList},
  { path: 'plans/new', component: PlanNew },
  { path: 'plans/:id', component: PlanView },
  { path: 'test', component: PerfTestComponent },
  //{ path: 'extension', component: ExtensionComponent},
  { path: 'about', component: About},
  {
    path: 'extension',
    loadChildren: () => import('../extension/extension.module').then(m => m.ExtensionModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(eroutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
