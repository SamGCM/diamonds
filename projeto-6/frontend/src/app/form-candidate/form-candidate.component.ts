import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';

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
    private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      schooling: ['', Validators.required],
      function: ['', Validators.required],
      listSkills: this.fb.group({
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
      this.handleModal("Alerta", "Preencha todos os campos", "alert")
    }

    else {
      let valueObjSkill = 1
      const listSkillsArr = Object.entries(this.candidateForm.value.listSkills).map(skill => skill[valueObjSkill])


      this.candidateService.create({
        ...this.candidateForm.value,
        listSkills: listSkillsArr
      }).subscribe((res: any) => {
        this.handleModal(
          "Sucesso",
          "Inscrição feita com sucesso, você pode ver a situação da sua incrição clicando abaixo. Use seu email para visualizar.",
          "success",
          {
            actionName: "Ver situação",
            actionDialog: () => this.router.navigate(['/registro'])
          }
        )

      })
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
  get function() { return this.candidateForm.get('function'); }
  get listSkills() { return this.candidateForm.get('listSkills'); }

}
