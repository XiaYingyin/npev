import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";

@Component({
  selector: 'app-ext-list',
  templateUrl: './ext-list.component.html',
  styleUrls: ['./ext-list.component.css'],
  providers: [SqlService]
})
export class ExtListComponent implements OnInit {
  extInfoList: IExtInfo [];
  extNameList: string [] = [];
  constructor(private _sqlService: SqlService) { }

  ngOnInit() {
    this._sqlService.getExtList().subscribe((data: IExtInfo []) => {
      this.extInfoList = { ...data };
      for (const [n, o] of Object.entries(this.extInfoList)) {
        //console.log(o.name);
        this.extNameList.push(o.name);
      }
    })
  }

  deleteExtesion() {

  }

  getExtDetail(ext: string) {
    //this._route.navigate(['/extension', ext]);
  }
}
