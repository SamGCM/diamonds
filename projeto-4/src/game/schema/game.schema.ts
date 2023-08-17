import * as mongoose from "mongoose";

const ConsoleSchema = new mongoose.Schema({
    codigo: Number
})

export const GameSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    dataLancamento: String,
    website: String,
    desenvolvedor: String,
    genero: String,
    urlCapa: String,
    consoles: [ConsoleSchema]
})