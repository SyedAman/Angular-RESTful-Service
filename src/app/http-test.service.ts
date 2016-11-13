import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpTestService {

  constructor(private _http:Http) { }

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com/')
      .map(res => res.json());
  }

  postJSON() {

  }
}
