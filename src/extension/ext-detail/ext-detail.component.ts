import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService, runTime, BarChartData } from "../../services/sql-service";
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
  extNameList: string [] = [];
  barChartDataSet: BarChartData [] = [];
  barChartLabels: string [] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
  currentPercentage: string;
  testComplete: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private sqlService: SqlService) {
    //this.currentPercentage = '10';
    
  }

  ngOnInit() {
    this.getExtDetail();
    this.extNameList.push(this.extInfo.name);
    
    // this.sqlService.getTestResult(this.extInfo.name).subscribe((data: BarChartData) => {
    //   const barChartData = { ...data };
    //   this.barChartDataSet.push(barChartData);
    // });
    
    this.testComplete = true;
    // this.sqlService.chartEvent.emit(this.barChartDataSet);
  }

  getExtDetail() {
    this.route.data
      .subscribe((data: { extInfo: IExtInfo }) => {
        this.extName = data.extInfo.name;
        this.extInfo = data.extInfo;
      });
  }
  public async perfTest(): Promise<BarChartData> {
    return new Promise<BarChartData>( resolve => {
      //const groups: Array<Node> = [];
      this.sqlService.perfTest(this.extName).subscribe((data: BarChartData) => {
        const bcd = { ...data };
        console.log(bcd);
        resolve(bcd);
        return bcd;
      });
    });
  }

  async onClick(event: Event) {
    this.testComplete = false;
    // this.sqlService.perfTest(this.extInfo.name).subscribe((data: BarChartData) => {
    //   const barChartData = { ...data };
    //   if (this.barChartDataSet === null)
    //     this.barChartDataSet.push(barChartData);
    // });
    const barChartData = await this.perfTest();
    let bcds: BarChartData [] = [];
    bcds.push(barChartData);
    this.barChartDataSet = bcds;
    this.testComplete = true;
    this.sqlService.chartEvent.emit(this.barChartDataSet);
  }
}
