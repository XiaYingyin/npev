import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { DevelopHomeComponent } from './develop-home/develop-home.component';
import { DevelopComponent } from './develop/develop.component';
import { DevelopRoutingModule } from './develop-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import { ExplorerComponent } from './explorer/explorer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NewFolderDialogComponent } from "./explorer/modals/newFolderDialog/newFolderDialog.component";
import { RenameDialogComponent } from "./explorer/modals/renameDialog/renameDialog.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    EditorComponent, 
    DevelopHomeComponent, 
    DevelopComponent, 
    ExplorerComponent,
    NewFolderDialogComponent, 
    RenameDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevelopRoutingModule,
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
    CodeEditorModule.forRoot()
  ],
  entryComponents: [NewFolderDialogComponent, RenameDialogComponent]
})
export class DevelopModule { }
