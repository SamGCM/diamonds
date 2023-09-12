import { Component } from '@angular/core';
import { ICandidate } from '../interfaces/candidate';
import { IRegister } from '../interfaces/register';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {
  dataTable: IRegister[] = [{
    id: "13611513",
    status: "Aprovado",
    candidate: {
      dateOfBirth: "27/07/1997",
      id: "1231651",
      document: 75365943185,
      phone: "859871198987",
      listSkills: [{
        name: "Teamwork",
        level: "intermediary"
      }],
      name: "Jorge",
      function: "Desenvolvedor",
      schooling: "Superior Incompleto",
      email: "jorge@ghotmail.com"
    }
  }]

  showModal: boolean = false;
  candidateSelected: ICandidate;


  toggleModal(){
    this.showModal = !this.showModal;
  }

  setCandidate(candidate: ICandidate) {
    this.candidateSelected = candidate;
    this.toggleModal()
  }


  approveRegistration(registerId: string) {

  }

  rejectRegistration(registerId: string) {

  }
}
