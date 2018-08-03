import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-TYpe': 'application/x-www-form-urlencoded'})
};


@Injectable()
export class AppService {
  private url = 'http://localhost:56691/api';
  constructor(
    private http: HttpClient,
  ) { }


  getArticalList(): Observable<any> {
     return this.http.get(this.url + '/Artical/getArticalList');
  }
  addArtical(article: any): Observable<any> {
    return this.http.post(this.url + '/Artical/addArtical', article , httpOptions);
 }
}
