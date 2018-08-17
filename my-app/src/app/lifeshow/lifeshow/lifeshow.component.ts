import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AppService } from '../../app.service';
import { Article } from '../../shared/classes/class';

@Component({
  selector: 'app-lifeshow',
  templateUrl: './lifeshow.component.html',
  styleUrls: ['./lifeshow.component.css']
})
export class LifeshowComponent implements OnInit {
  data: any = new Article;
  ArticleList: any;
  constructor(private activatedRoute: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.data.Id = this.activatedRoute.snapshot.queryParams.Id;
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute);
    if (this.data.Id === undefined) {
      this.getArticalList(1);
    }
  }

  getArticalList(a) {

    this.appservice.getArticalListByType(a)
      .subscribe(response => {
        this.ArticleList = response;
        console.log(this.ArticleList);
      });
  }

}
