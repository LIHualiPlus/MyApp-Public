import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class MyCarouselComponent implements OnInit {

  constructor() { }
  noPause: boolean;
  ngOnInit() {
    this.noPause = true;
  }

}
