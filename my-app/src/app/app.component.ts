import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '../../node_modules/@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { LoginComponent } from './membership/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private modalservice: BsModalService) {}
  // rout() {
  //   this.router.navigate(['home']);
  // }
  login() {

    const aa = this.modalservice.show(LoginComponent);
  }
}
