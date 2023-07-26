import { writeLegend } from "../writeLegend";

export const questionThree = () => {
  let inputThirdQ = document.getElementById("thirdQ-field");
  let textThirdQ = document.getElementById("thirdQ-legend");
  let btnSubmitThirdQ = document.getElementById("btn-submit-thirdQ");

  btnSubmitThirdQ.addEventListener("click", (e) => {
    const minimunAge = 18;
    let actualYear = new Date().getFullYear();
    let yearOfBirth = new Date(inputThirdQ.value.toString()).getFullYear();
    let result = actualYear - (yearOfBirth + 1);

    if (result > minimunAge) {
      writeLegend(textThirdQ, `Você pode votar! Você tem ${result} anos`);
    } else if (result < minimunAge) {
      writeLegend(textThirdQ, `Você não pode votar! Você tem ${result} anos`);
    } else {
      writeLegend(
        textThirdQ,
        "Não foi possível calcular, insira seu ano de nascimento."
      );
    }
  });
};
