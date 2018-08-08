import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { DialogService, BuiltInOptions } from '../../../../node_modules/ngx-bootstrap-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  type = 1;
  repeatPassword: any;
  constructor(private appService: AppService, private dialogService: DialogService) { }

  ngOnInit() {
  }
  login() {
    this.appService.login(this.user).subscribe(
      response => {
        console.log(response);
        const json = JSON.stringify(response.Data);
        localStorage.setItem('userinfo', json);
      }
    );
  }

  regist() {
    this.appService.regist(this.user).subscribe(
      response => {
        console.log(response);
        if (response.Success) {
          this.dialogService.show(<BuiltInOptions>{
            content: '注册成功',
            icon: 'success',
            size: 'sm',
            showCancelButton: false,
            timeout: 1000,
            showConfirmButton: false
          });
        }
      }
    );
  }
  change() {
    this.type = 2;
  }

}
