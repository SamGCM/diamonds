import { Document } from 'mongoose';

export type Consoles = {
    codigo: number
}

export class Game extends Document {
    nome: string
    descricao: string
    dataLancamento: string
    website: string
    desenvolvedor: string
    genero: string
    urlCapa: string
    consoles: Consoles[]
}

