import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-register',
  templateUrl: './check-register.component.html',
  styleUrls: ['./check-register.component.scss']
})
export class CheckRegisterComponent implements OnInit {
  showModal = false;
  dataDialog: {
    title: string,
    description: string,
    actionName?: string
  }
  typeDialog: "alert" | "success" | "error" = "alert"
  actionDialog: Function | null;

  formGetCandidate: any;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
    this.formGetCandidate = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    if(!this.formGetCandidate.valid) {
      this.formGetCandidate.markAllAsTouched();
      this.handleModal("Alerta", "Preencha todos os campos", "alert")
    }

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
