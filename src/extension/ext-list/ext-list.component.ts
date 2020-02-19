import { Component, OnInit, NgModule, Input } from '@angular/core';
import { IExtInfo, SqlService } from "../../services/sql-service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ExtListFilterService } from '../ext-list-filter.service';

@Component({
  selector: 'app-ext-list',
  templateUrl: './ext-list.component.html',
  styleUrls: ['./ext-list.component.css'],
  // providers: [ExtListFilterService]
})
export class ExtListComponent implements OnInit {
  extInfoList: IExtInfo [];
  extNameList: string [] = [];
  extensions$: Observable<IExtInfo []>;
  filteredExtensions$: Observable<IExtInfo []>;
  // extTypeList = [
  //   {id: 1, name: "Index Scan extensions"},
  //   {id: 2, name: "Table Scan extensions"},
  //   {id: 3, name: "Function Scan extensions"}
  // ]
  // @Input() set extType(et: number) {

  // }
  constructor(private _sqlService: SqlService, 
              /*private extListFilterService: ExtListFilterService, */
              private route: ActivatedRoute) { 
                this.extensions$ = this.route.paramMap.pipe(
                  switchMap(params => {
                    return this._sqlService.extListFilter(0);
                  })
                )
                // this._sqlService.extListFilter(0).subscribe((data: IExtInfo []) => {
                //   this.extInfoList = { ...data };
                //   for (const [n, o] of Object.entries(this.extInfoList)) {
                //     console.log(o.name);
                //     console.log("line 39");
                //     //const t = JSON.stringify(o);
                //     this.extNameList.push(o.name);
                //   }
                // })
                this._sqlService.selectEvent.subscribe(
                  // params => 
                  //   this.extensions$ = this._sqlService.extListFilter(params),
                  //   err => console.log("Can't get extensions. Error code: %s, URL: %s "),
                  //   () => console.log('DONE')
                  params => {
                    console.log(params);
                    this.extensions$ = this._sqlService.extListFilter(params);
                  } 
                );
            
                console.log("test");
              }

  ngOnInit() {
    // this._sqlService.getExtList().subscribe((data: IExtInfo []) => {
    //   this.extInfoList = { ...data };
    //   for (const [n, o] of Object.entries(this.extInfoList)) {
    //     console.log(o.name);
    //     this.extNameList.push(o.name);
    //   }
    // })
    
  }

  deleteExtesion() {

  }
}
