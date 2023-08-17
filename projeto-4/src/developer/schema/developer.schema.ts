import * as mongoose from "mongoose";

export const DeveloperSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    dataFundacao: {
        type: String
    },
    website: {
        type: String
    },
    sede: {
        type: String
    },
})