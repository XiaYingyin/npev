import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { runTime, SqlService } from 'src/services/sql-service';
import { Observable } from 'rxjs';
import { BarChartData } from '../../services/sql-service';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-ext-chart',
  templateUrl: './ext-chart.component.html',
  styleUrls: ['./ext-chart.component.css']
})
export class ExtChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() public barChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  private runTimeSet$: Observable<runTime []>;
  displayFlag: boolean = false;
  //@Input() public extName: string;
  _extName: string;

  @Input() set extName(value: string) {
    this._extName = value;
    console.log("chart: " + this._extName);
  }

  get extName() {
    return this._extName;
  }



  @Input() public barChartData: ChartDataSets[] = [];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private sqlService: SqlService) {
    
    //this.chart.update();
    // this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
    //   const bcd = { ...data };
    //   console.log(this.extName);
    //   console.log(bcd);
    //   this.barChartData.push(bcd);
    // });
    
    this.sqlService.chartEvent.subscribe(
      params => {
        this.barChartData = params;
        console.log(params);
        this.displayFlag = true;
      } 
    );
   }

  async ngOnInit() {
    // this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
    //   const bcd = { ...data };
    //   console.log(this.extName);
    //   console.log(bcd);
    //   this.barChartData.push(bcd);
    // });
    const bcd: BarChartData = await this.getTestResult();
    let bcds: BarChartData [] = [];
    bcds.push(bcd);
    // this.barChartData.push(bcd);
    
    this.barChartData = bcds;
    //console.log(this.barChartData);
    this.displayFlag = true;
    console.log("init " + this.extName);
    if (!bcd.label) 
      this.displayFlag = false;
    else 
      this.displayFlag = true;
  }
  
  public async getTestResult(): Promise<BarChartData> {
    return new Promise<BarChartData>( resolve => {
      //const groups: Array<Node> = [];
      this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
        const bcd = { ...data };
        this.displayFlag = true;
        resolve(bcd);
        return bcd;
      });
    });
    // this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
    //   const bcd = { ...data };
    //   console.log(this.extName);
    //   console.log(bcd);
    //   //this.barChartData.push(bcd);
    //   return bcd;
    // }); 
  }
}
