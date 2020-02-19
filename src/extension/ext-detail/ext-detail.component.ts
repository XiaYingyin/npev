import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService, runTime } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
//import { runTime, SqlService } from '../../services/sql-service';

@Component({
  selector: 'app-ext-detail',
  templateUrl: './ext-detail.component.html',
  styleUrls: ['./ext-detail.component.css']
})
export class ExtDetailComponent implements OnInit {
  extName: string;
  extInfo: IExtInfo;
  resultSet: runTime[] = [];
  chartLabels: string [] = [];
  chartData: number [] = [];
  chartLabelsJson: any;
  chartDataJson: any;

  constructor(private route: ActivatedRoute, private router: Router, private sqlService: SqlService) {}

  ngOnInit() {
    this.getExtDetail();
  }

  getExtDetail() {
    // this.extName = this.route.snapshot.paramMap.get('extName');
    // console.log(this.extName);
    // //this.extName = "pg_strom";
    // this._sqlService.getExtDetail(this.extName).subscribe((data: IExtInfo) => {
    //   this.extInfo = data;
    // })
    this.route.data
      .subscribe((data: { extInfo: IExtInfo }) => {
        this.extName = data.extInfo.name;
        this.extInfo = data.extInfo;
      });
  }

  onClick(event: Event) {
    // create table
    // http
    this.sqlService.chartEvent.emit(this.extInfo.name);
    this.sqlService.perfTest(this.extInfo.name).subscribe((data: runTime []) => {
      this.resultSet = { ...data };
      for (const [n, o] of Object.entries(this.resultSet)) {
        //const t = JSON.stringify(o);
        this.chartLabels.push(o.name);
        this.chartData.push(o.time);
      }
    });
    this.chartDataJson = [
      { data: [100, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 33], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 23], label: 'Series B' }
    ];

    this.chartLabelsJson = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
    console.log("line 60");
  }
}
