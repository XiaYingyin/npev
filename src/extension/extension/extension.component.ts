import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css'],
  providers: [SqlService]
})

export class ExtensionComponent implements OnInit {
  extInfoList: IExtInfo [];
  extNameList: string [] = [];
  constructor(private _sqlService: SqlService) { }

  ngOnInit() {
    this._sqlService.extListFilter(0).subscribe((data: IExtInfo []) => {
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
