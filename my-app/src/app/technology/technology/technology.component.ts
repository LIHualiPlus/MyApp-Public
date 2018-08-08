import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: '../../lifeshow/lifeshow/lifeshow.component.html',
  styleUrls: ['../../lifeshow/lifeshow/lifeshow.component.css']
})
export class TechnologyComponent implements OnInit {
  ArticleList: any;
  data: any;
  constructor( private activatedRoute: ActivatedRoute, private appservice: AppService) { }

  ngOnInit( ) {
    this.data = this.activatedRoute.snapshot.queryParams;
    this.getArticalList();
  }

  getArticalList() {

    this.appservice.getArticalListByType(2)
    .subscribe(response => {
      this.ArticleList = response;
      console.log(this.ArticleList);
    });
  }

}
