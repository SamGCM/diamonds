import * as mongoose from "mongoose";

export const ConsoleSchema = new mongoose.Schema({
    codigo: {
        type: Number
    },
    nome: {
        type: String
    },
    dataLancamento: {
        type: String
    },
    empresa: {
        type: String
    },
})