import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class AppService implements OnInit {
  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit() {
  }

  getArticalList(): Observable<any> {
    const userinfo = JSON.parse(localStorage.getItem('userinfo'));

    return this.http.get('api/Artical/getArticalList', this.options());
  }
  getArticalListByType(type: any): Observable<any> {
    return this.http.get(`api/Artical/GetArticalListByType/?type=${type}`, this.options());
  }
  GetArticalById(Id: any): Observable<any> {
    return this.http.get(`api/Artical/GetArticalById/?Id=${Id}`, this.options());
  }
  addArtical(article: any): Observable<any> {
    return this.http.post('api/Artical/addArtical', article , this.options());
  }
  AddLike(ArticleId: any): Observable<any> {
    return this.http.get(`api/Artical/AddLike/?ArticleId=${ArticleId}`, this.options());
  }
  login(user: any): Observable<any> {
    return this.http.post('api/Member/Login', user , this.options());
  }
  regist(user: any): Observable<any> {
    return this.http.post('api/Member/Regist', user , this.options());
  }


  options() {
    const userinfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(userinfo);
    const httpOptions = {
      headers: new HttpHeaders({
        'LoginName': userinfo != null ? userinfo.LoginName : ' ',
        'PassWord': userinfo != null ? userinfo.PassWord : ' '
      })
    };
    console.log(httpOptions);
    return httpOptions;
  }
}
