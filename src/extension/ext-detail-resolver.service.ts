import { Injectable } from '@angular/core';
import { IExtInfo, SqlService } from '../services/sql-service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExtDetailResolverService implements Resolve<IExtInfo> {

constructor(private _sqlService: SqlService, private router: Router) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExtInfo> | Observable<never> {
  let extName = route.paramMap.get('extName');
  return this._sqlService.getExtDetail(extName).pipe(
    take(1),
    mergeMap(extInfo => {
      if (extInfo) {
        console.log(extInfo.name);
        return of(extInfo);
      } else { // id not found
        this.router.navigate(['/extension']);
        return EMPTY;
      }
    })
  );
  }

}
