import { Component, OnInit } from '@angular/core';
import { SqlService } from '../../services/sql-service';

@Component({
  selector: 'app-ext-select',
  templateUrl: './ext-select.component.html',
  styleUrls: ['./ext-select.component.css']
})
export class ExtSelectComponent implements OnInit {
  extType: number = 0;
  extTypeList = [
    {id: 1, name: "Index Scan extensions"},
    {id: 2, name: "Table Scan extensions"},
    {id: 3, name: "Function Scan extensions"}
  ]
  constructor(private _sqlSerive: SqlService) { } 

  ngOnInit() {
  }

  getChange(formValue: any) { 
    this.extType = formValue;
    console.log(formValue);
  }
}
