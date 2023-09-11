import { Component } from '@angular/core';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {
  dataTable = [{
    candidate: {
      name: "Jorge",
      function: "Desenvolvedor",
      schooling: "Superior incompleto",
      email: "jorge@ghotmail.com"
    }
  }]
}
