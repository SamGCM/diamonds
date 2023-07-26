import { writeLegend } from "../writeLegend";

export const questionFour = () => {
  let inputOneFourQ = document.getElementById("fourQ-field-one");
  let inputTwoFourQ = document.getElementById("fourQ-field-two");

  let textFourQ = document.getElementById("fourQ-legend");
  let btnSubmitFourQ = document.getElementById("btn-submit-fourQ");

  btnSubmitFourQ.addEventListener("click", (e) => {
    let wage = inputOneFourQ.value;
    let percent = inputTwoFourQ.value;
    let fieldsIsNotEmpty = percent !== "" && wage !== "";

    function calc() {
      let multi = wage * percent;
      let result = multi / 100;
      return result;
    }

    if (fieldsIsNotEmpty) {
      writeLegend(textFourQ, `O reajuste salarial é de R$ ${calc()}`);
    } else {
      writeLegend(textFourQ, "Não foi possível calcular o reajuste.");
    }
  });
};
