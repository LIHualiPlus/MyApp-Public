import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-lifeshow',
  templateUrl: './lifeshow.component.html',
  styleUrls: ['./lifeshow.component.css']
})
export class LifeshowComponent implements OnInit  {
 data: any;
 ArticleList: any;
  constructor( private activatedRoute: ActivatedRoute,private appservice: AppService) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.queryParams;
    console.log(this.data);
    console.log(this.activatedRoute);
    this.getArticalList(1);
  }
   
  getArticalList(a) {

    this.appservice.getArticalListByType(a)
    .subscribe(response => {
      this.ArticleList = response;
      console.log(this.ArticleList);
    });
  }

}
