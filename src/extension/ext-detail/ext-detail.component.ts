import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService, BarChartData } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';

export interface ExtName {
  name: string;
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
