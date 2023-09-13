import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-form-candidate',
  templateUrl: './form-candidate.component.html',
  styleUrls: ['./form-candidate.component.scss']
})
export class FormCandidateComponent implements OnInit {
  optionsSchooling = ["Analfabeto", "Fundamental Completo", "Médio Incompleto", "Médio Completo", "Superior Incompleto", "Superior Completo", "Mestrado", "Doutorado", "Ignorado"]
  listOfSkills = [
    {
      name: "Organização",
      description: "Algumas características de quem tem essa competência profissional inclui atenção e cumprimento dos prazos, avisando com antecedência quando houver contratempos e problemas que influenciam na sua conclusão."
    },
    {
      name: "Trabalho em equipe",
      description: "Geralmente, quando a equipe se reúne para alcançar os objetivos e metas, nenhum membro se sobrecarrega. Com isso, o trabalho se torna mais produtivo e as chances de sucesso são maiores."
    },
    {
      name: "Conhecimento Técnico",
      description: "É importante que o profissional adquira conhecimento na área e saiba utilizar programas ou outras ferramentas para a execução das tarefas. Assim, ele consegue aplicar sua competência com sucesso e ter um bom desempenho nas atividades."
    },
  ];

  candidateForm: any;
  showModal = false;
  dataDialog: {
    title: string,
    description: string,
    actionName?: string
  }
  typeDialog: "alert" | "success" | "error" = "alert"
  actionDialog: Function | null;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService
  ) { }

  ngOnInit() {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      schooling: ['', Validators.required],
      role: ['', Validators.required],
      skills: this.fb.group({
        ['Organização']: ['', Validators.required],
        ['Trabalho em equipe']: ['', Validators.required],
        ['Conhecimento Técnico']: ['', Validators.required],
      })
    }, {updateOn: 'change'});

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

  onSubmit() {
    if(!this.candidateForm.valid) {
      this.candidateForm.markAllAsTouched();
      this.handleModal("Alerta", "Preencha todos os campos", "alert", {actionName: "Ver", actionDialog: () => console.log("viu")})
    }

    else {
      this.candidateService.create(this.candidateForm.values)
    }
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }


  get name() { return this.candidateForm.get('name'); }
  get document() { return this.candidateForm.get('document'); }
  get dateOfBirth() { return this.candidateForm.get('dateOfBirth'); }
  get email() { return this.candidateForm.get('email'); }
  get phone() { return this.candidateForm.get('phone'); }
  get schooling() { return this.candidateForm.get('schooling'); }
  get role() { return this.candidateForm.get('role'); }
  get skills() { return this.candidateForm.get('skills'); }

}
