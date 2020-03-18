import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop.component';
import { DevelopHomeComponent } from './develop-home/develop-home.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {
    path: '', component: DevelopComponent,
    children: [
      {
        path: '', component: DevelopHomeComponent, 
        children: [
          {
            path: '', component: EditorComponent
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
export class DevelopRoutingModule { }
