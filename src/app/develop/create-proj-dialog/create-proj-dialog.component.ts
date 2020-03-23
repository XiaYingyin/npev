import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { FileService, ProjectInfo } from "../file.service";
import {SqlService} from "../../../services/sql-service";
import { resolve } from 'url';

export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-create-proj-dialog',
  templateUrl: './create-proj-dialog.component.html',
  styleUrls: ['./create-proj-dialog.component.css'],
  providers: [ FileService ]
})
export class CreateProjDialogComponent implements OnInit {
  type: string;

  
  projectInfo: ProjectInfo = new ProjectInfo();
  stepperFormGroup: FormGroup = new FormGroup(
    {
      nameCtrl: new FormControl(''),
      versionCtrl: new FormControl(''),
      descCtrl: new FormControl(''),
      posCtrl: new FormControl('')
    }
  );

  constructor(
    public dialogRef: MatDialogRef<CreateProjDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder,
    private fileService: FileService,
    private sqlService: SqlService) {
      this.projectInfo.name = null;
      // this.projectInfo = new ProjectInfo('', '', '', '', '');
      // this.projectInfo = new ProjectInfo();

      // this.projectInfo.name = null;
      // this.projectInfo.type = null;
      // this.projectInfo.description = null;
      // this.projectInfo.path = null;
      // this.projectInfo.version = null;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   thirdCtrl: ['', Validators.required]
    // });
    // this.forthFormGroup = this._formBuilder.group({
    //   forthCtrl: ['', Validators.required]
    // });
    // this.stepperFormGroup = this._formBuilder.group({

    // });
  }
  
  async submit() {
    this.projectInfo.name = this.stepperFormGroup.get('nameCtrl').value;
    
    this.projectInfo.description = this.stepperFormGroup.get('descCtrl').value;
    this.projectInfo.path = this.stepperFormGroup.get('posCtrl').value;
    this.projectInfo.type = this.data.type;
    this.projectInfo.version = this.stepperFormGroup.get('versionCtrl').value;

    this.fileService.ncreateProject(this.projectInfo).subscribe(
      pi =>  {
        console.log("origin: " + this.projectInfo.name);
        console.log("get info" + pi);
      }
    );
    // const pi = await this.ncreateProject();

    this.sqlService.refreshEvent.emit(this.projectInfo.path + this.projectInfo.name);
    this.dialogRef.close();
    // info explorer
      
  }
  
  public async ncreateProject(): Promise<ProjectInfo> {
    return new Promise<ProjectInfo>(
      resolve => {
        this.fileService.ncreateProject(this.projectInfo).subscribe(
          pi =>  {
                 console.log("origin: " + this.projectInfo.name);
                 console.log("get info" + pi);
                 return pi;
          }
        )
      }
    )

  }
}
