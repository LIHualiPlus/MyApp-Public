import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  type = 1;
  repeatPassword: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  login() {
    this.appService.login(this.user).subscribe(
      response => {
        console.log(response);

      }
    );
  }

  regist() {
    this.appService.regist(this.user).subscribe(
      response => {
        console.log(response);

      }
    );
  }
}
