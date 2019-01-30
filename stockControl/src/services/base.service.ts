import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BaseService {

  private url = 'http://localhost:4000'; // dev


  constructor(public http: HttpClient) { }

  public getUrl() {
    return this.url;
  }

  public httpGet(pUrlParams) {
    let headers = new HttpHeaders();
    let urlParams = this.getUrl() + pUrlParams;

    headers.append('Content-Type', 'application/json');

    return this.http.get(urlParams, {headers: headers})
      .pipe( map((response) => response))
      .toPromise();
    }


  public httpPost(pUrlParams, pPostBody) {
    let headers = new HttpHeaders();
    let urlParams = this.getUrl() + pUrlParams;

    headers.append('Content-Type', 'application/json');

    return this.http
      .post('localhost', pPostBody, { headers: headers })
      .pipe(map(response =>  response ))
      .toPromise();
  }

  public httpPut(pUrlParams, pPostBody) {
    let headers = new HttpHeaders();
    let urlParams = this.getUrl() + pUrlParams;

    headers.append('Content-Type', 'application/json');

    return this.http
      .put(urlParams, pPostBody, { headers: headers })
      .pipe(map(response => response))
      .toPromise();

  }

  public httpDelete(pUrlParams, pDeleteBody?) {
    let headers = new HttpHeaders();
    let urlParams = this.getUrl() + pUrlParams;

    headers.append('Content-Type', 'application/json');

    return this.http
      .delete(urlParams, { headers: headers })
      .pipe(map(response => response))
      .toPromise();
  }
}
