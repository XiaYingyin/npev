import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileInfo } from '../file.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateProjDialogComponent } from "../create-proj-dialog/create-proj-dialog.component";

@Component({
  selector: 'app-develop-home',
  templateUrl: './develop-home.component.html',
  styleUrls: ['./develop-home.component.css']
})
export class DevelopHomeComponent {
  showFiller = false;
  fileInfo: FileInfo = {
    name: "",
    size: 0,
    content: "",
    Readable: false,
    ifExist: true,
    Writeable: false, 
    absolutePath: ""
  };

  editorVal: string;

 
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  // fileSelectedHandler(event: FileInfo) {
  //   this.fileInfo = event;
  // }
  openDialog(type: string) {
    const dialogRef = this.dialog.open(CreateProjDialogComponent, {
      width: '500px',
      data: {type: type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  fileSelectedHandler(event: string) {
    console.log("parent get content: " + event);
    this.editorVal = event;
  }
}
