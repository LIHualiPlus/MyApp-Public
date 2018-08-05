import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-TYpe': 'application/x-www-form-urlencoded'})
};


@Injectable()
export class AppService {

  constructor(
    private http: HttpClient,
  ) { }


  getArticalList(): Observable<any> {
     return this.http.get( 'api/Artical/getArticalList');
  }
  getArticalListByType(type :any): Observable<any> {
    return this.http.get( `api/Artical/GetArticalListByType/?type=${type}`);
 }
  addArtical(article: any): Observable<any> {
    return this.http.post( 'api/Artical/addArtical', article);
 }
}
