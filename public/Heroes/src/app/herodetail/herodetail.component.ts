import { Component, OnInit , Input } from '@angular/core';

import { Hero } from '../heroclass';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})

export class HerodetailComponent implements OnInit {
@Input() selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
