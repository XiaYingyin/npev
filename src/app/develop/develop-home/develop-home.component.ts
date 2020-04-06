import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileInfo, BuildInfo } from '../file.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateProjDialogComponent } from "../create-proj-dialog/create-proj-dialog.component";
import { EditorComponent } from '../editor/editor.component';
import { BuildPanelComponent } from '../build-panel/build-panel.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ExplorerComponent } from '../explorer/explorer.component';

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

  @ViewChild(EditorComponent, {static: false}) devIDE: EditorComponent;
  @ViewChild(ExplorerComponent, {static: false}) explorer: ExplorerComponent;
  @ViewChild('editor', {static: false}) editorElementRef: ElementRef;
  @ViewChild(BuildPanelComponent, {static: true}) buildPanel: BuildPanelComponent;
  editorVal: string;
  //openOutputPanel: boolean;

 
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private render: Renderer2, private _snackBar: MatSnackBar) {}

  // fileSelectedHandler(event: FileInfo) {
  //   this.fileInfo = event;
  // }
  openDialog(type: string) {
    const dialogRef = this.dialog.open(CreateProjDialogComponent, {
      width: '500px',
      data: {type: type}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.animal = result;
    });
  }

  fileSelectedHandler(event: string) {
    // console.log("parent get content: " + event);
    this.editorVal = event;
  }

  async buildProj() {
    this.devIDE.test();
    //const result: string = this.explorer.buildProject();
    // const result: string = "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftree.bc ftree.c\n" +
    // "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftree.o ftree.c\n" +
    // "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -shared -o ftree.so ftcompare.o ftinsert.o ftpage.o ftree.o ftsearch.o ftutils.o ftsort.o ftvalidate.o ftxlog.o sortsupport.o tuplesort.o -L/usr/lib/x86_64-linux-gnu  -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -L/usr/lib/llvm-6.0/lib  -L/usr/lib/x86_64-linux-gnu/mit-krb5 -Wl,--as-needed";
    //console.log(result);
    //this.buildPanel.displayOutput(result.timeStamp + '\n' + result.result);
    console.log("build");
    const bi: BuildInfo = await this.explorer.buildProject();
    console.log(bi);
    this.buildPanel.displayOutput(bi.result.toString());
  }

  openOutputPanel() {
    //this.render.setStyle(this.editorElementRef.nativeElement, "height", "200px");
    this.editorElementRef.nativeElement.style.height = '200px';
  }

  install() {
    this._snackBar.open("Install Succeed!", "", {
      duration: 2000,
    });
  }

  createFile(name: string) {
    this.explorer.createFile(name);
  }
}
