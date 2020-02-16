import { Component, OnInit } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ext-list',
  templateUrl: './ext-list.component.html',
  styleUrls: ['./ext-list.component.css'],
  providers: [SqlService]
})
export class ExtListComponent implements OnInit {
  extInfoList: IExtInfo [];
  extNameList: string [] = [];
  extensions$: Observable<IExtInfo []>;
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

  deleteExtesion() {

  }

  getExtDetail(ext: string) {
    //this._route.navigate(['/extension', ext]);
  }
}
