import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService, BarChartData } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';

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
  barChartDataSet: BarChartData[] = [];
  barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
  currentPercentage: string;
  testComplete: boolean = false;
  ifEdit: boolean = false;
  DescText: string;
  myControl = new FormControl();
  extensionList: IExtInfo [];
  options: string[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private sqlService: SqlService) {
    //this.currentPercentage = '10';
    this.sqlService.extListFilter(0).subscribe(
      (data) => {
        this.extensionList = data;
        for (const ext of this.extensionList) {
          this.options.push(ext.name);
        }
        // console.log("option get: " + this.options);
      }
    );
  }

  async ngOnInit() {
    this.getExtDetail();
    this.extNameList.push(this.extInfo.name);
    this.DescText = this.extInfo.description;

    // this.testComplete = true;
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
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
        console.log("ready to emit");
        this.sqlService.getTestResult(data.extInfo.name).subscribe((data: BarChartData) => {
          const barChartData = { ...data };
          let bcds: BarChartData[] = [];
          bcds.push(barChartData);
          this.barChartDataSet = bcds;
          console.log("Emit");
          this.sqlService.chartEvent.emit(this.barChartDataSet);
        }); 
      });
  }
  
  public async perfTest(): Promise<BarChartData []> {
    let bcds: BarChartData[] = [];
    
    for (const en of this.extensions) {
      const barChartData = await new Promise<BarChartData>(resolve => {
        //const groups: Array<Node> = [];
        this.sqlService.perfTest(en.name).subscribe((data: BarChartData) => {
          const bcd = { ...data };
          // console.log(bcd);
          resolve(bcd);
          return bcd;
        });
      });
      bcds.push(barChartData);
    }
    
    return bcds;
  }

  public async getTestResult(): Promise<BarChartData> {
    return new Promise<BarChartData>(resolve => {
      //const groups: Array<Node> = [];
      this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
        const bcd = { ...data };
        // console.log(bcd);
        resolve(bcd);
        return bcd;
      });
    });
  }

  // async onClick(event: Event) {
  //   this.testComplete = false;
  //   // const barChartData = await this.perfTest();
  //   // let bcds: BarChartData[] = [];
  //   // bcds.push(barChartData);
  //   // this.barChartDataSet = bcds;
  //   this.barChartDataSet = await this.perfTest();
  //   this.testComplete = true;
  //   this.sqlService.chartEvent.emit(this.barChartDataSet);
  // }

  saveExtDesc() {
    this.ifEdit = false;
    this.extInfo.description = this.DescText;
    // submit new description to backend
    this.sqlService.updateExtInfo(this.extName, this.DescText).subscribe();
  }

  editExtDesc() {
    this.ifEdit = true;
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  extensions: ExtName[] = [
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    // if ((value || '').trim()) {
    //   if (this.options.indexOf(value.toString()))
    //     this.extensions.push({name: value.trim()});
    // }
    //if (this.options.)


    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: ExtName): void {
    const index = this.extensions.indexOf(fruit);

    if (index >= 0) {
      this.extensions.splice(index, 1);
    }
  }

  public addSelect(event) {

    let option = event.option;
    let input = event.input;
    // Reset the input value
    // console.log(input);
    // if (input) {
    //   console.log(input);
    //   input.value = '';
    // }

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
}
