import { writeLegend } from "../writeLegend";

export const questionTwo = () => {
  let inputASecondQ = document.getElementById("secondQ-field-one");
  let inputBSecondQ = document.getElementById("secondQ-field-two");
  let textSecondQ = document.getElementById("secondQ-legend");
  let btnSubmitSecondQ = document.getElementById("btn-submit-secondQ");

  btnSubmitSecondQ.addEventListener("click", (e) => {
    let value_a_is_bigger = inputASecondQ.value > inputBSecondQ.value;
    let value_b_is_bigger = inputBSecondQ.value > inputASecondQ.value;

    if (value_a_is_bigger) {
      writeLegend(textSecondQ, `O número ${inputASecondQ.value} é maior!`);
    } else if (value_b_is_bigger) {
      writeLegend(textSecondQ, `O número ${inputBSecondQ.value} é maior!`);
    } else {
      writeLegend(textSecondQ, "Não foi possível calcular ainda...");
    }
  });
};
