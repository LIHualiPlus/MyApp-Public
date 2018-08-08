import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Article } from '../../shared/classes/class';
import { DialogService, BuiltInOptions } from '../../../../node_modules/ngx-bootstrap-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ArticleList: Array<Article>;
  constructor(public appservice: AppService, public dialogService: DialogService ) { }

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

  show() {
    this.dialogService.show(<BuiltInOptions>{
        content: '保存成功',
        icon: 'success',
        size: 'sm',
        showCancelButton: false,
        timeout: 1000,
        showConfirmButton: false
    });

  }

}
