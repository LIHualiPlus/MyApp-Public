import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroclass';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: '李华林'
  };
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
     this.heroService.getHeroes().subscribe(
       heroes => this.heroes = heroes

     );
     console.log(this.heroes);
  }
}
