import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService, runTime, BarChartData } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
//import { runTime, SqlService } from '../../services/sql-service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';

export interface Fruit {
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
  extNameList: string [] = [];
  extFuncList: string [] = [];
  extOptList: string [] = [];
  extTypeList: string [] = [];
  barChartDataSet: BarChartData [] = [];
  barChartLabels: string [] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'];
  currentPercentage: string;
  testComplete: boolean = false;
  ifEdit: boolean = false;
  DescText: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private route: ActivatedRoute, private router: Router, private sqlService: SqlService) {
    //this.currentPercentage = '10';
    
  }

  async ngOnInit() {
    this.getExtDetail();
    this.extNameList.push(this.extInfo.name);
    this.DescText = this.extInfo.description;
    // this.sqlService.getTestResult(this.extInfo.name).subscribe((data: BarChartData) => {
    //   const barChartData = { ...data };
    //   this.barChartDataSet.push(barChartData);
    // });

    // this.sqlService.chartEvent.emit(this.barChartDataSet);
    
    this.testComplete = true;
    // this.sqlService.chartEvent.emit(this.barChartDataSet);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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

  public async getTestResult(): Promise<BarChartData> {
    return new Promise<BarChartData>( resolve => {
      //const groups: Array<Node> = [];
      this.sqlService.getTestResult(this.extName).subscribe((data: BarChartData) => {
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
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    // if ((value || '').trim()) {
    //   if (this.options.indexOf(value.toString()))
    //     this.fruits.push({name: value.trim()});
    // }
    //if (this.options.)


    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  public addSelect(event) {

    let option = event.option;
    let input = event.input;
    // Reset the input value
    console.log(input);
    if (input) {
      console.log(input);
      input.value = '';
    }

    let value = option.value;
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }
    
  }

  filteredOptions: Observable<string[]>;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
