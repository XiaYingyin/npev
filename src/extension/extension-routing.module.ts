import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtensionComponent } from "./extension/extension.component";
import { ExtHomeComponent } from "./ext-home/ext-home.component";
import { ExtDetailComponent } from './ext-detail/ext-detail.component';
import { ExtListComponent } from './ext-list/ext-list.component';
import { ExtDetailResolverService } from './ext-detail-resolver.service';

const routes: Routes = [
  {
    path: '', component: ExtensionComponent,
    children: [
      {
        path: '', component: ExtListComponent,
        children: [
          {
            path: '', component: ExtHomeComponent
          },
          {
            path: ':extName',
            component: ExtDetailComponent,
            resolve: {
              extInfo: ExtDetailResolverService
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionRoutingModule { }
