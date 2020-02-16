import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface IJSONPlan {
    queryPlanJson: string;
}

export interface IJSONQuery {
    query: string;
}

export interface IExtInfo {
    name: string;
    type: number;
    version: string;
    schema: string;
    description: string;
}

@Injectable({
    providedIn: 'root',
})

export class SqlService {
    private queryURL: string = 'http://localhost:8080/query/';
    private extListURL: string = 'http://localhost:8080/extension/';
    private extDetailURL: string = 'http://localhost:8080/extension/'
    constructor(private _http: HttpClient) { }
    getQueryPlan(query: string): Observable<string> {
        return this._http.get(this.queryURL + query)
        .pipe(
            map((res: string) => { 
                //console.log(res);
                return res; })
        );
    }

    ngetQueryPlan(query: string): Observable<string> {
        //console.log(query);
        let params = new HttpParams();
        params = params.set('query', query);
        const queryjson = {query: "test"};
        
        return this._http.post<string>(this.queryURL, JSON.stringify(queryjson))
        .pipe(
            map((res: string) => { 
                //console.log(res);
                return res; })
        )
    }
    getExtList() {
        return this._http.get<IExtInfo []>(this.extListURL)
    }

    getExtDetail(extname: string) {
        return this._http.get<IExtInfo>(this.extDetailURL + extname);
    }
}
