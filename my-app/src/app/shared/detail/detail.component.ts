import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Article } from '../classes/class';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() Id: any;
  data: Article;
  Text: any;
  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.GetArticalById();
  }

  GetArticalById() {

    this.appservice.GetArticalById(this.Id)
      .subscribe(response => {
        this.Text = response.Data.Text;
        this.data = response.Data;
      });
  }
}
