const genderTrans = {
    male: "Masculino",
    female: "Feminino"
}

export const genderTranslate = (gender) => {
    if(genderTrans[gender]) {
        return genderTrans[gender]
    }

    else {
        return "Gênero não identificado"
    }
}