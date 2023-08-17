import { Document } from 'mongoose';

export class Console extends Document {
    codigo: number
    nome: string
    dataLancamento: string
    empresa: string
}