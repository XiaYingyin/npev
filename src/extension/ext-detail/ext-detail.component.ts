import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ext-detail',
  templateUrl: './ext-detail.component.html',
  styleUrls: ['./ext-detail.component.css']
})
export class ExtDetailComponent implements OnInit {
  extName: string;
  extInfo: IExtInfo;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getExtDetail();
  }

  getExtDetail() {
    // this.extName = this.route.snapshot.paramMap.get('extName');
    // console.log(this.extName);
    // //this.extName = "pg_strom";
    // this._sqlService.getExtDetail(this.extName).subscribe((data: IExtInfo) => {
    //   this.extInfo = data;
    // })
    this.route.data
      .subscribe((data: { extInfo: IExtInfo }) => {
        this.extName = data.extInfo.name;
        this.extInfo = data.extInfo;
      });
  }
}
