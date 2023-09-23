import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ICandidate } from '../interfaces/candidate';

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

  formGetRegister: any;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ){}

  ngOnInit() {
    this.formGetRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {

    if(this.formGetRegister.valid) {
      this.formGetRegister.markAllAsTouched();

      this.registerService.findAll(this.formGetRegister.value.email).subscribe(
        (res: any) => {
          if(res[0]) {
            let candidate: ICandidate = res[0].candidate

            this.handleModal(
              `Status: ${res[0].status}`,
              `
              ${candidate.name} - ${candidate.document} - ${candidate.email}
              `,
              "alert"
            )
          }

          else {
            this.handleModal(
              "Inscrição não encontrada",
              "Não foi encontrada nenhuma inscrição cadastrada com esse email",
              "error"
            )
          }
        }
      )
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

  get email() { return this.formGetRegister.get('email'); }
}
