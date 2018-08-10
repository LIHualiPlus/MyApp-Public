import { Component, OnInit, OnDestroy, ComponentRef, Input } from '@angular/core';
import { BsModalRef } from '../../../../node_modules/ngx-bootstrap';
declare const $;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() message: any;
  @Input() type: any;
  timer: any;
  constructor(   public activeModal: BsModalRef) {
    this.timer = setInterval(() => {
      this.activeModal.hide();
    }, 2000);
  }

  ngOnInit() {


  }




  ngOnDestroy() {
    if (this.timer) {

      clearInterval(this.timer);

    }
  }
}
