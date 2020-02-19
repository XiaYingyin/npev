import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { IExtInfo } from '../services/sql-service';

// @Injectable({
//   providedIn: 'root'
// })

export interface IExtInfo {
  name: string;
  type: number;
  version: string;
  schema: string;
  description: string;
}

export class ExtListFilterService {
  //selectEvent: EventEmitter<number> = new EventEmitter();
  private basicURL: string = 'http://localhost:8080';

  constructor(/*private _http: HttpClient*/) { }

  /*extListFilterURL: string = "/extension/list"
  extListFilter(extType: number) {
      let params = new HttpParams();
      params = params.set('type', String(extType));
      //return this._http.get<IExtInfo []>(this.extListURL + "type/" + extType.toString());
      return this._http.get<IExtInfo []>(this.basicURL + this.extListFilterURL, { params });
  }*/
}
