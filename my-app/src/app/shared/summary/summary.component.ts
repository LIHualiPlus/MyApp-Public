import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Article } from '../classes/class';

declare const $;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() data: Article;
  constructor(private appservice: AppService) {

  }

  ngOnInit() {
  }

  AddLike() {
    this.appservice.AddLike(this.data.Id).subscribe(
      response => {
        console.log(response);
        if (response.Success) {
          this.data.LikeNum += 1;
          $('#' + this.data.Id).css({'color': 'rgb(226, 7, 7)'});
        }
      }
    );

  }
}
