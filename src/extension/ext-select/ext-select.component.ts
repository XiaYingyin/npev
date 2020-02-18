import { Component, OnInit, Output } from '@angular/core';
import { SqlService } from '../../services/sql-service';
import { ExtListFilterService } from '../ext-list-filter.service';

@Component({
  selector: 'app-ext-select',
  templateUrl: './ext-select.component.html',
  styleUrls: ['./ext-select.component.css'],
  //providers: [SqlService]
})
export class ExtSelectComponent implements OnInit {
  extType: number = 0;
  extTypeList = [
    {id: 0, name: "All extensions"},
    {id: 1, name: "Index Scan extensions"},
    {id: 2, name: "Table Scan extensions"},
    {id: 3, name: "Function Scan extensions"}
  ];

  constructor(private sqlService: SqlService) { 

  } 

  ngOnInit() {
  }

  getChange(formValue: any) { 
    this.extType = formValue;
    //console.log(formValue);
    this.sqlService.selectEvent.emit(this.extType);
    console.log(formValue);
  }
}
