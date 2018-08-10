import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '../../node_modules/@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { LoginComponent } from './membership/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modalRef: BsModalRef;
  constructor(private modalservice: BsModalService) { }
  // rout() {
  //   this.router.navigate(['home']);
  // }
  login() {

    this.modalRef = this.modalservice.show(LoginComponent);
    const onHidden = this.modalservice.onHidden.subscribe(() => {
      onHidden.unsubscribe();
    });

  }
}
