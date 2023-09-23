import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

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

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
    private candidateService: CandidateService
  ){
  }

  ngOnInit() {
    this.formGetCandidate = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })

    if(this.authService.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {

    this.authService.login().subscribe(() => {
      this.router.navigate(['dashboard']);
    });

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
