import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface IJSONPlan {
    queryPlanJson: string;
}

@Injectable()
export class SqlService {
    private queryURL: string = 'http://localhost:8080/query/';
    constructor(private _http: HttpClient) { }
    getQueryPlan(query: string): Observable<string> {
        return this._http.get(this.queryURL + query)
        .pipe(
            map((res: string) => { 
                console.log(res);
                return res; })
        );
    }
}
