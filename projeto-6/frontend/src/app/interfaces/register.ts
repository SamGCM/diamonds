import { ICandidate } from "./candidate";

export interface IRegister {
  id: string,
  status: "Aguardando" | "Aprovado" | "Reprovado",
  candidate: ICandidate
}
