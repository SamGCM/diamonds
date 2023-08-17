import { Document } from 'mongoose';

export interface Developer extends Document {
    nome: string;
    dataFundacao: string;
    website: string;
    sede: string;
}