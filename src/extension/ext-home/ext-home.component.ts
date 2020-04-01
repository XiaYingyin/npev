import { Component, OnInit, NgModule, Input } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
//import { ExtListFilterService } from "../ext-list-filter.service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ext-home',
  templateUrl: './ext-home.component.html',
  styleUrls: ['./ext-home.component.css'],
  providers: [SqlService]
})
export class ExtHomeComponent implements OnInit {
  extInfoList: IExtInfo [];
  extNameList: string [] = [];
  extensions$: Observable<IExtInfo []>;
  //@Input() extType: number = 0;
  _extType: number = 0;
  extTypeList = [
    {id: 1, name: "Index Scan extensions"},
    {id: 2, name: "Table Scan extensions"},
    {id: 3, name: "Function Scan extensions"}
  ]

  option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

  constructor(private _sqlService: SqlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._sqlService.extListFilter(0).subscribe((data: IExtInfo []) => {
      this.extInfoList = { ...data };
      for (const [n, o] of Object.entries(this.extInfoList)) {
        //console.log(o.name);
        this.extNameList.push(o.name);
      }
    })
    this.extensions$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this._sqlService.extListFilter(0);
      })
    )
  }

  getChange(formValue: any) { 
    this._extType = formValue;
    // console.log(formValue);
  }

  deleteExtesion() {

  }

  getExtDetail(ext: string) {
    //this._route.navigate(['/extension', ext]);
  }

}
