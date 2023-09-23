import { Component } from '@angular/core';
import { ICandidate } from '../interfaces/candidate';
import { IRegister } from '../interfaces/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {
  dataTable: IRegister[];

  showModal: boolean = false;
  candidateSelected: ICandidate;

  constructor(
    private registerService: RegisterService,
  ){}

  ngOnInit(): void {
    this.getList();
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  private getList() {
    this.registerService.findAll().subscribe((res: any) => {
      this.dataTable = res
    })
  }

  setCandidate(candidate: ICandidate) {
    this.candidateSelected = {...candidate, dateOfBirth: new Date(candidate.dateOfBirth).toLocaleDateString("pt-br")};
    this.toggleModal()
  }


  approveRegistration(registerId: string) {
    this.registerService.update(registerId, "Aprovado").subscribe((res: any) => {
      this.dataTable.forEach((register: IRegister, index: number) => {
        if(register.id === res.id) {
          this.dataTable[index] = res;
        }
      })
    })
  }

  rejectRegistration(registerId: string) {
    this.registerService.update(registerId, "Reprovado").subscribe((res: any) => {
      this.dataTable.forEach((register: IRegister, index: number) => {
        if(register.id === res.id) {
          this.dataTable[index] = res;
        }
      })
    })
  }
}
