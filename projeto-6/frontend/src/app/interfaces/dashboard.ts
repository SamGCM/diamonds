export interface IDashboard {
  charts: IChart
}

export interface IChart {
  schooling: {
    Analfabeto?: number,
    FundamentalCompleto?: number,
    MedioIncompleto?: number,
    MedioCompleto?: number,
    SuperiorCompleto?: number,
    SuperiorIncompleto?: number,
    Mestrado?: number,
    Doutorado?: number,
    Ignorado?: number,
  },
  statusRegisters: {
    aguardando: number,
    reprovado: number,
    aprovado: number,
  }
}
