import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IJSONPlan {
    queryPlanJson: string;
}

@Injectable()
export class SqlService {
    private queryURL: string = 'http://localhost:8080/query/';
    constructor(private _http: HttpClient) { }
    getQueryPlan(query: string) {
        return this._http.get<IJSONPlan>(this.queryURL + query);
    }
}
