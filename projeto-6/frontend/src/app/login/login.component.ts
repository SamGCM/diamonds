import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showModal = false;
  dataDialog: {
    title: string,
    description: string,
    actionName?: string
  }
  typeDialog: "alert" | "success" | "error" = "alert"
  actionDialog: Function | null;

  formGetCandidate: any;

  onSubmit() {

  }

  handleModal(title: string, description: string, type: "alert" | "success" | "error", action?: {actionName: string, actionDialog: Function}) {
    if(action) {
      this.dataDialog = {
        title: title,
        description: description,
        actionName: action.actionName
      }

      this.actionDialog = action.actionDialog
    }

    else {
      this.dataDialog = {
        title: title,
        description: description
      }
    }

    this.typeDialog = type
    this.toggleModal()
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  get email() { return this.formGetCandidate.get('email'); }
  get password() { return this.formGetCandidate.get('password'); }
}
