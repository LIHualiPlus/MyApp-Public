import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ArticleList: any;
  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.getArticalList();
  }
  getArticalList() {

    this.appservice.getArticalList()
    .subscribe(response => {
      this.ArticleList = response;
      console.log(this.ArticleList);
    });
  }
}
