import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtensionComponent } from "./extension/extension.component";
import { ExtContentComponent } from "./ext-content/ext-content.component";
import { ExtHomeComponent } from "./ext-home/ext-home.component";

const routes: Routes = [
  {
    path: '', component: ExtensionComponent,
    children: [
      {
        path: '', component: ExtHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionRoutingModule { }
