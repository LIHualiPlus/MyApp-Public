import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() data: any;
  Text: any;
  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.GetArticalById();
  }

  GetArticalById() {

    this.appservice.GetArticalById(this.data.Id)
      .subscribe(response => {
        console.log(this.data);
        this.Text = response.Data.Text;
      });
  }
}
