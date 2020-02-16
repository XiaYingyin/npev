import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ExtensionComponent } from './extension/extension.component';
import { ExtHomeComponent } from './ext-home/ext-home.component';
import { ExtensionRoutingModule } from './extension-routing.module';
import { ExtDetailComponent } from './ext-detail/ext-detail.component';
import { ExtListComponent } from './ext-list/ext-list.component';

@NgModule({
   declarations: [
      ExtHomeComponent,
      ExtensionComponent,
      ExtDetailComponent,
      ExtListComponent
   ],
   imports: [
      CommonModule,
      ExtensionRoutingModule
   ]
})
export class ExtensionModule { }
