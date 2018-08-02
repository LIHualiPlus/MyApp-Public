import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() data: any;
  constructor(private appservice: AppService) {

   }

  ngOnInit() {
  }
}
