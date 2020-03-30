import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IExtInfo, SqlService, runTime, BarChartData } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

export interface ExtName {
  name: string;
}

@Component({
  selector: 'app-ext-test',
  templateUrl: './ext-test.component.html',
  styleUrls: ['./ext-test.component.css'],
})
export class ExtTestComponent implements OnInit {
  // Chart info
  _extName: string;
  @Input() set extName(value: string) {
    this._extName = value;
  }
  get extName() {
    return this._extName;
  }

  barChartDataSet: BarChartData[] = [];
  barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
  currentPercentage: string;
  testComplete: boolean = true;
  ifEdit: boolean = false;
  DescText: string;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  private runTimeSet$: Observable<runTime []>;
  displayFlag: boolean;
  @Input() public barChartData: ChartDataSets[] = [ { data: [34.0, 16.9, 23.5, 45.7, 23.0, 19.0, 23.5, 45.7, 100.0, 60.0, 23.5, 45.7, 23.5, 45.7, 100.0, 90.0, 23.5, 45.7, 100.0, 78.0, 23.5, 45.7], label: "test" } ];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  extNameList: string[] = [];
  // navbar
  myControl = new FormControl();
  extensionList: IExtInfo [];
  options: string[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  extensions: ExtName[] = [];

  constructor(private sqlService: SqlService) {
    this.sqlService.chartEvent.subscribe(
      ( params: ChartDataSets[]) => {
        // console.log("call by route");
        if (params[0].label) {
          this.barChartData = params;
          // console.log(params);
          this.displayFlag = true;
        } else {
          this.displayFlag = false;
        }
      } 
    );
// console.log("Get to ext test");
    this.sqlService.extListFilter(0).subscribe(
      (data) => {
        this.extensionList = data;
        for (const ext of this.extensionList) {
          this.options.push(ext.name);
        }
      }
    );
  }

  async ngOnInit() {
    console.log("init ext test");
    this.displayFlag = true;
    // let bcds: BarChartData[] = [];
    // const bd = await this.getTestResult();
    // bcds.push(bd);
    // this.barChartData = bcds;
    // console.log(bd);
    // console.log("after init ext test");
    this.testComplete = true;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  public async perfTest(): Promise<BarChartData []> {
    let bcds: BarChartData[] = [];
    for (const en of this.extensions) {
      const barChartData = await new Promise<BarChartData>(resolve => {
        this.sqlService.perfTest(en.name).subscribe((data: BarChartData) => {
          const bcd = { ...data };
          resolve(bcd);
          return bcd;
        });
      });
      bcds.push(barChartData);
    }
    
    return bcds;
  }

  async onClick(event: Event) {
    this.testComplete = false;
    this.barChartData = await this.perfTest();
    this.testComplete = true;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ext: ExtName): void {
    const index = this.extensions.indexOf(ext);
    // console.log("remove: " + index);
    if (index >= 0) {
      this.extensions.splice(index, 1);
    }
  }

  public addSelect(event) {
    let option = event.option;

    let value = option.value;
    if ((value || '').trim()) {
      this.extensions.push({ name: value.trim() });
    }
  }

  filteredOptions: Observable<string[]>;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
    
  public async getTestResult(): Promise<BarChartData> {
    return await new Promise<BarChartData>( resolve => {
      this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
        const bcd = { ...data };
        this.displayFlag = true;
        resolve(bcd);
        return bcd;
      });
    });
  }
}
