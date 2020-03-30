import { Component, OnInit, ViewChild } from '@angular/core';
import { IExtInfo, SqlService, BarChartData } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface InfoItem {
  id: number;
  item: string;
}

@Component({
  selector: 'app-ext-detail',
  templateUrl: './ext-detail.component.html',
  styleUrls: ['./ext-detail.component.css']
})
export class ExtDetailComponent implements OnInit {
  extName: string;
  extInfo: IExtInfo;
  extNameList: string[] = [];
  extFuncList: string[] = [];
  extOptList: string[] = [];
  extTypeList: string[] = [];
  ifEdit: boolean = false;
  DescText: string;

  displayedColumns: string[] = ['id', 'item'];
  funcDataSource = new MatTableDataSource<InfoItem>();
  optDataSource = new MatTableDataSource<InfoItem>();
  typeDataSource = new MatTableDataSource<InfoItem>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // extensionList: IExtInfo [];
  constructor(private route: ActivatedRoute, private router: Router, private sqlService: SqlService) {

  }

  async ngOnInit() {
    this.getExtDetail();
    this.extNameList.push(this.extInfo.name);
    this.DescText = this.extInfo.description;
  }

  getExtDetail() {
    this.route.data
      .subscribe((data: { extInfo: IExtInfo }) => {
        this.extName = data.extInfo.name;
        this.extInfo = data.extInfo;
        this.DescText = this.extInfo.description;
        this.extFuncList = this.extInfo.functionList;
        this.extTypeList = this.extInfo.typeList;
        this.extOptList = this.extInfo.operatorList;

        let funcTable: InfoItem[] = [];
        let c: number = 0;
        if (this.extFuncList !== undefined) {
          for (const name of this.extFuncList) {
            c = c + 1;
            funcTable.push({ id: c, item: name });
          }
        }
        this.funcDataSource = new MatTableDataSource<InfoItem>(funcTable);
        this.funcDataSource.paginator = this.paginator;

        let optTable: InfoItem[] = [];
        c = 0;
        if (this.extOptList !== undefined) {
          for (const name of this.extOptList) {
            c = c + 1;
            optTable.push({ id: c, item: name });
          }
        }
        this.optDataSource = new MatTableDataSource<InfoItem>(optTable);
        this.optDataSource.paginator = this.paginator;

        let typeTable: InfoItem[] = [];
        c = 0;
        if (this.extTypeList !== undefined) {
          for (const name of this.extTypeList) {
            c = c + 1;
            typeTable.push({ id: c, item: name });
          }
        }
        this.typeDataSource = new MatTableDataSource<InfoItem>(typeTable);
        this.typeDataSource.paginator = this.paginator;

        this.sqlService.getTestResult(data.extInfo.name).subscribe((data: BarChartData) => {
          const barChartData = { ...data };
          let bcds: BarChartData[] = [];
          bcds.push(barChartData);
          this.sqlService.chartEvent.emit(bcds);
        });
      });
  }

  saveExtDesc() {
    this.ifEdit = false;
    this.extInfo.description = this.DescText;
    // submit new description to backend
    this.sqlService.updateExtInfo(this.extName, this.DescText).subscribe();
  }

  editExtDesc() {
    this.ifEdit = true;
  }
}
