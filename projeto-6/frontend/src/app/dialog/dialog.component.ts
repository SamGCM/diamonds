import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter();
  @Input() type: "alert" | "error" | "success";
  @Input() data: {
    title: string,
    description: string,
    actionName?: string
  };
  @Input() action: Function | null;

  toggleModal(){
    this.showModal = false;
  }
}
