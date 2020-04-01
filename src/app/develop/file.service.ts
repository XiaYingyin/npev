import { Injectable, EventEmitter } from '@angular/core';

import { v4 } from 'uuid';
import { FileElement } from './explorer/model/file-element';
import { BehaviorSubject, Observable, of as observableOf, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { ConfigService } from '../app-config.service';
//import { EventEmitter } from 'protractor';

export interface FileNode {
  id: number;
  name: string;
  path: string;
  parentId: number;
  children: FileNode[];
  suffix: string;
  type: string;
}

export class ProjectInfo {
  // constructor(
   name: string;
   type: string;
   version: string;
   path: string;
   description: string;
  // ) {}
}

export interface FileInfo {
  name: string;
  size: number;    // bytes
  content: string;
  Writeable: boolean;
  Readable: boolean;
  absolutePath: string;
  ifExist: boolean;
}

export interface IFileService {
  add(fileElement: FileElement);
  delete(id: string);
  update(id: string, update: Partial<FileElement>);
  queryInFolder(folderId: string): Observable<FileElement[]>;
  get(id: string): FileElement;
}

@Injectable()
export class FileService implements IFileService {
  private map = new Map<string, FileElement>();
  private baseUrl: string;
  refreshEvent: EventEmitter<string> = new EventEmitter();
  constructor(private _http: HttpClient, private cs: ConfigService) {
    this.baseUrl = cs.baseUrl;
  }

  add(fileElement: FileElement) {
    fileElement.id = v4();
    this.map.set(fileElement.id, this.clone(fileElement));
    return fileElement;
  }

  delete(id: string) {
    this.map.delete(id);
  }

  update(id: string, update: Partial<FileElement>) {
    let element = this.map.get(id);
    element = Object.assign(element, update);
    this.map.set(element.id, element);
  }

  private querySubject: BehaviorSubject<FileElement[]>;
  queryInFolder(folderId: string) {
    const result: FileElement[] = [];
    this.map.forEach(element => {
      if (element.parent === folderId) {
        result.push(this.clone(element));
      }
    });
    if (!this.querySubject) {
      this.querySubject = new BehaviorSubject(result);
    } else {
      this.querySubject.next(result);
    }
    return this.querySubject.asObservable();
  }

  get(id: string) {
    return this.map.get(id);
  }

  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element));
  }

  private developFolderScanUrl: string = "/develop";
  getFileNodeTree(folder: string) {
    let params = new HttpParams();
    params = params.set('folder', folder);
    // console.log("Call fileservice!");
    return this._http.get<FileNode[]>(this.baseUrl + this.developFolderScanUrl, { params });
  }

  private getFileContentUrl: string = "/develop/file";
  getFileContent(path: string) {
    let params = new HttpParams();
    params = params.set('path', path);
    return this._http.get<FileInfo>(this.baseUrl + this.getFileContentUrl, { params });
  }

  private createProjectUrl: string = "/develop/project";
  createProject(name: string, type: string, version: string, path: string, description: string) {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("version", version);
    formData.append("path", path);
    formData.append("description", description);
    // let projectInfo: ProjectInfo = new ProjectInfo('', '', '', '', '');
    // var projectInfo: ProjectInfo;
    // projectInfo.name = name;
    // projectInfo.type = type;
    // projectInfo.description = description;
    // projectInfo.path = path;
    // projectInfo.version = version;

    this._http.post<ProjectInfo>(this.baseUrl + this.createProjectUrl, formData).subscribe(
      param => { console.log(param); }
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  ncreateProject(projectInfo: ProjectInfo): Observable<ProjectInfo> {
    // console.log("post project info: " + projectInfo.name);
    return this._http.post<ProjectInfo>(this.baseUrl + this.createProjectUrl, projectInfo).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
}
