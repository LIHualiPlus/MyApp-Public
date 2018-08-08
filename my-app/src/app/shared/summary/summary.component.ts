import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Article } from '../classes/class';
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
}
