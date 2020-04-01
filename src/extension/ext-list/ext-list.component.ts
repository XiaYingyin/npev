import { Component, OnInit, NgModule, Input, Output } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ExtListFilterService } from '../ext-list-filter.service';
import { ConfirmDialogModel, DeleteDialogComponent } from 'src/plan-list/modals/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ext-list',
  templateUrl: './ext-list.component.html',
  styleUrls: ['./ext-list.component.css'],
  // providers: [ExtListFilterService]
})
export class ExtListComponent implements OnInit {
  extInfoList: IExtInfo[];
  extNameList: string[] = [];
  extensions$: Observable<IExtInfo[]>;
  filteredExtensions$: Observable<IExtInfo[]>;
  @Output() selectedRow: string;
  activeExt: IExtInfo;

  constructor(private _sqlService: SqlService,
    /*private extListFilterService: ExtListFilterService, */
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.extensions$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this._sqlService.extListFilter(0);
      })
    )

    this._sqlService.selectEvent.subscribe(
      params => {
        // console.log(params);
        this.extensions$ = this._sqlService.extListFilter(params);
      }
    );

    // console.log("test");
  }

  ngOnInit() {

  }
  getSelectedRow(ext: IExtInfo) {
    //console.log(name + " is selected!");
    this.activeExt = ext;
  }

  deleteExtesion(ext: IExtInfo) {
    // this.extensions$.forEach
    this.extensions$ = this.extensions$.pipe(
      map(extensions => {
        return extensions.filter(extension => extension.name !== ext.name)
      }
      )
    )

    this._sqlService.deleteExt(ext.name).subscribe();
  }

  result: string;
  openDialog(ext: IExtInfo) {
    const message = `You're about to delete '` + ext.name + `' Are you sure?`;

    const dialogData = new ConfirmDialogModel("Confirm", message);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
        this.deleteExtesion(ext);
      }
      // console.log(this.result);
    });
  }
}
