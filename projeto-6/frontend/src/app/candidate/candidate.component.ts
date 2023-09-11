import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
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

}
