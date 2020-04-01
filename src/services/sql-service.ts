import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../app/app-config.service';


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
    functionList: string [];
    operatorList: string [];
    typeList: string [];
}

export interface runTime {
    name: string;
    time: number;
}

export interface BarChartData {
    data: number [];
    label: string;
}

@Injectable({
    providedIn: 'root',
})

export class SqlService {
    selectEvent: EventEmitter<number> = new EventEmitter();
    chartEvent: EventEmitter<BarChartData []> = new EventEmitter();
    refreshEvent: EventEmitter<string> = new EventEmitter();

    private basicURL: string = 'http://localhost:8080';    
    
    constructor(private _http: HttpClient, private cs: ConfigService) { 
        this.basicURL = cs.baseUrl;
    }

    getQueryPlan(query: string): Observable<string> {
        return this._http.get(this.queryURL + query)
        .pipe(
            map((res: string) => { 
                return res; })
        );
    }

    private queryURL: string = '/query/';
    ngetQueryPlan(query: string): Observable<string> {
        let params = new HttpParams();
        params = params.set('query', query);
        const queryjson = {query: query.toString()};
        
        return this._http.get<string>(this.basicURL + this.queryURL, { params })
        .pipe(
            map((res: string) => { 
                //console.log(res);
                return res; })
        )
    }

    /*
        SELECT e.extname AS \"%s\", "
             "e.extversion AS \"%s\", n.nspname AS \"%s\", c.description AS \"%s\"\n"
             "FROM pg_catalog.pg_extension e "
             "LEFT JOIN pg_catalog.pg_namespace n ON n.oid = e.extnamespace "
             "LEFT JOIN pg_catalog.pg_description c ON c.objoid = e.oid "
             "AND c.classoid = 'pg_catalog.pg_extension'::pg_catalog.regclass
    */
   private extListURL: string = '/extension/list';
    getExtList() {
        return this._http.get<IExtInfo []>(this.basicURL + this.extListURL)
    }

    /*
    1. get extension oid
    SELECT e.extname, e.oid FROM pg_catalog.pg_extension e

    2. get extension content by oid
     SELECT pg_catalog.pg_describe_object(classid, objid, 0) AS "Object description"
     FROM pg_catalog.pg_depend
     WHERE refclassid = 'pg_catalog.pg_extension'::pg_catalog.regclass AND refobjid = '$oid' AND deptype = 'e'
     ORDER BY 1;
    */
   private extDetailURL: string = '/extension/list/';
    getExtDetail(extname: string) {
        return this._http.get<IExtInfo>(this.basicURL + this.extDetailURL + extname);
    }
    
    private extListFilterURL: string = "/extension/list";
    extListFilter(extType: number) {
        let params = new HttpParams();
        params = params.set('type', String(extType));
        return this._http.get<IExtInfo []>(this.basicURL + this.extListFilterURL, { params });
    }

    private getTestURL: string = "/extension/test/";
    getTestResult(extName: string) {
        // console.log(extName);
        return this._http.get<BarChartData>(this.basicURL + this.getTestURL + extName);
    }

    private perfTestURL: string = "/extension/test";
    perfTest(extName: string) {
        let params = new HttpParams();
        params = params.set('name', extName);
        return this._http.get<BarChartData>(this.basicURL + this.perfTestURL, {params});
    }

    private updateExtInfoURL: string = "/extension/list/";
    updateExtInfo(extName: string, desc: string) {
        let params = new HttpParams();
        params = params.set('description', desc);
        return this._http.patch(this.basicURL + this.updateExtInfoURL + extName, params);
    }

    private deleteExtURL: string = "/extension/list/";
    deleteExt(extName: string) {
        return this._http.delete(this.basicURL + this.deleteExtURL + extName);
    }
}
