import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { runTime, SqlService } from 'src/services/sql-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ext-chart',
  templateUrl: './ext-chart.component.html',
  styleUrls: ['./ext-chart.component.css']
})
export class ExtChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() public barChartLabels: Label[] = []/* = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7']*/;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  private runTimeSet$: Observable<runTime []>;
  displayFlag: boolean = false;

  @Input() public barChartData: ChartDataSets[] = [] /*= [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ]*/;

  constructor(private sqlService: SqlService) {
    this.sqlService.chartEvent.subscribe(
      params => {
        console.log(params);
        this.barChartData = [
          { data: [100, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 33], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 23], label: 'Series B' }
        ];
        this.barChartLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
        this.runTimeSet$ = this.sqlService.perfTest(params);
        this.displayFlag = true;
      } 
    );
   }

  ngOnInit() {
    
  }

}
