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

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})

export class ExplorerComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);



  constructor(public dialog: MatDialog) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "ftree",
        type: "",
        children: [
          {
            filename: "ftree",
            type: "c",
            children: [],
          },
          {
            filename: "ftree",
            type: "control",
            children: [],
          },
          {
            filename: "Makefile",
            type: "makefile",
            children: [],
          },
          {
            filename: "ftree--0.1",
            type: "sql",
            children: [],
          },
          {
            filename: "README",
            type: "md",
            children: [],
          }
        ]
      }
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };

  display(filename: string) {

  }

  ngOnInit() {

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
}
