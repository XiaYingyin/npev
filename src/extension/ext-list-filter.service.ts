import { Injectable, EventEmitter } from '@angular/core';
import { IExtInfo } from '../services/sql-service';

@Injectable({
  providedIn: 'root'
})
export class ExtListFilterService {
  //selectEvent: EventEmitter = new EventEmitter();
  constructor() { }
  extListFilter(extInfo: IExtInfo, extType: number) {

  }

}
