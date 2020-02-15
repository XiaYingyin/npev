import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css'],
  providers: [SqlService]
})

export class ExtensionComponent implements OnInit {
  extInfoList: Array<IExtInfo>;
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
}
