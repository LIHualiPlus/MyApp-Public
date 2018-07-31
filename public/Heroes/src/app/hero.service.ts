import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';

import { Hero } from './heroclass';
import { HEROES } from './mock-heroes';
import { HttpClient , HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;'
}
)
};
@Injectable()


export class HeroService {
 private heroesUrl = 'http://localhost:64401/api/Book/GetHeroes';
  constructor(
    private http: HttpClient,
  ) { }
  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
