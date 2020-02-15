import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ExtensionComponent } from './extension/extension.component';
import { ExtContentComponent } from './ext-content/ext-content.component';
import { ExtHomeComponent } from './ext-home/ext-home.component';
import { ExtensionRoutingModule } from './extension-routing.module';

@NgModule({
   declarations: [
      ExtContentComponent,
      ExtHomeComponent,
      ExtensionComponent
   ],
   imports: [
      CommonModule,
      ExtensionRoutingModule
   ]
})
export class ExtensionModule { }
