import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-TYpe': 'application/json'})
};


@Injectable()
export class AppService {
  private url = 'http://localhost:56691/api/Artical/getArticalList';
  constructor(
    private http: HttpClient,
  ) { }


  getArticalList(): Observable<any> {
     return this.http.get(this.url);
  }

}
