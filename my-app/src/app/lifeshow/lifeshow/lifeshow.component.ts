import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-lifeshow',
  templateUrl: './lifeshow.component.html',
  styleUrls: ['./lifeshow.component.css']
})
export class LifeshowComponent implements OnInit {
 data: any;
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.queryParams;
    console.log(this.data);
    console.log(this.activatedRoute);
  }

}
