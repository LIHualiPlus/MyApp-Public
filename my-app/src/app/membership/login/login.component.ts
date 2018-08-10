import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { DialogService, BuiltInOptions, DialogOptions } from '../../../../node_modules/ngx-bootstrap-modal';
import { ModalComponent } from '../../shared/modal/modal.component';
import { BsModalService, BsModalRef } from '../../../../node_modules/ngx-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  type = 1;
  repeatPassword: any;
  modalRef: BsModalRef;
  constructor(private appService: AppService, private dialogService: DialogService, private modalservice: BsModalService) { }

  ngOnInit() {
  }
  login() {
    this.appService.login(this.user).subscribe(
      response => {
        console.log(response);
        if (response.Success) {
          const json = JSON.stringify(response.Data);
          localStorage.setItem('userinfo', json);

          const initialState = {
            type: 'success',
            message: '登录成功',
          };
          this.modalRef = this.modalservice.show(ModalComponent, { class: 'modal-sm', initialState });
          this.modalRef.hide();
        } else {
          const initialState = {
            type: 'danger',
            message: response.AllMessages,
          };
          this.modalRef = this.modalservice.show(ModalComponent, { class: 'modal-sm', initialState });


        }

      }
    );

  }

  regist() {
    if (this.repeatPassword !== this.user.Password) {
      this.dialogService.alert('aaa', 'aaa', <BuiltInOptions>{
        content: '两次密码不一致',
        icon: 'error',
        size: 'sm',
        showCancelButton: false,
        timeout: 1000,
        showConfirmButton: false
      });

    }

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
