import { Component, OnInit, NgModule, Input } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
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
  constructor(private _sqlService: SqlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._sqlService.getExtList().subscribe((data: IExtInfo []) => {
      this.extInfoList = { ...data };
      for (const [n, o] of Object.entries(this.extInfoList)) {
        //console.log(o.name);
        this.extNameList.push(o.name);
      }
    })
    this.extensions$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this._sqlService.getExtList();
      })
    )
  }

  getChange(formValue: any) { 
    this._extType = formValue;
    console.log(formValue);
  }

  deleteExtesion() {

  }

  getExtDetail(ext: string) {
    //this._route.navigate(['/extension', ext]);
  }

}
