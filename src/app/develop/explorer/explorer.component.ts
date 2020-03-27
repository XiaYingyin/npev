import { OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { Component, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { FileElement } from './model/file-element';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from './modals/newFolderDialog/newFolderDialog.component';
import { RenameDialogComponent } from './modals/renameDialog/renameDialog.component';
import { FileNode, FileService, FileInfo } from '../file.service';
import { SqlService } from 'src/services/sql-service';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


export enum ExtType {
  FUNCTION,
  INDEX_SCAN,
  TABLE_SCAN
}

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})

export class ExplorerComponent implements OnInit {
  curProjectPath: string = '';
  extensionType: ExtType;

  projectName: string;
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  activeNode: FileNode;
  data: FileNode [];
  fileInfo: FileInfo = {
              name: "",
              size: 0,
              content: "",
              Readable: false,
              ifExist: true,
              Writeable: false, 
              absolutePath: ""
            };
  fileContent: string = '';
  IDEWorkSpace: string = "~/vds_workspace/";

  constructor(public dialog: MatDialog, private fileService: FileService, private sqlService: SqlService) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

     //this.curProjectPath = "/Users/liuchaoyang/Documents/gitRepo/f9";
     //localStorage.setItem('prevProjectPath', this.curProjectPath);
     this.curProjectPath = localStorage.getItem('prevProjectPath');
     let strArr: string [] = [''];
     if (this.curProjectPath !== null)
        strArr = (this.curProjectPath.split('/'));
     this.projectName = strArr[strArr.length - 1];
    if (this.curProjectPath !== null) {
      this.fileService.getFileNodeTree(this.curProjectPath).subscribe(
        result => { 
          this.data = result as FileNode [];
          this.dataChange.next(this.data);
        }
      );
      //this.fileService.getFileContent
    }

    this.sqlService.refreshEvent.subscribe(
      params => {
        console.log("explorer get path: " + params);
        this.curProjectPath = params;
        localStorage.setItem('prevProjectPath', this.curProjectPath);
        const that = this;
        let strArr = (params.split('/'));
        this.projectName = strArr[strArr.length - 1];
        setTimeout(
          function () {
            that.fileService.getFileNodeTree(params).subscribe(
              (result: FileNode[]) => { 
                console.log(result);
                that.data = result as FileNode [];
                that.dataChange.next(that.data);
              }
            )
        }, 1000);
      }
    )
  }

  ngOnInit() {

  }
  // fileInfo: FileInfo;
  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {
    if (nodeData.type === "folder")
      return true; 
    else
      return false;
  };

  display(filename: string) {

  }

  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedUp = new EventEmitter();
  @Output() fileSelected = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {}

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }

  openMenu(event: MouseEvent, element: FileElement, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

  refresh() {
    this.fileService.getFileNodeTree(this.curProjectPath).subscribe(
      result => { 
        this.data = result as FileNode [];
        this.dataChange.next(this.data);
      }
    );
  }

  save() {
    
  }

  saveAll() {

  }

  onFileSelected(path: string) {
    console.log("file " + path + " is selected!");
    // let fileInfo: FileInfo;
    this.fileService.getFileContent(path).subscribe(
      fileinfo => {
        console.log(fileinfo);
        this.fileInfo = fileinfo;
        this.fileContent = fileinfo.content;
      }
    );
    // this.fileSelected.emit(fileInfo.content);
    this.fileSelected.emit(this.fileInfo.content);
  }

  createProject(name: string, type: string) {

  }
}
