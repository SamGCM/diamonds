import { writeLegend } from "../writeLegend";

export const questionOne = () => {
  let inputFirstQ = document.getElementById("firstQ-field");
  let textFirstQ = document.getElementById("firstQ-legend");
  const divider = 2;
  const restDivZero = 0;
  const restDivOne = 1;

  inputFirstQ.addEventListener("change", (e) => {
    let formartedValue = parseInt(e.target.value);
    let rest = formartedValue % divider;
    let isPair = rest === restDivZero;
    let isOdd = rest === restDivOne;

    if (isPair) {
      writeLegend(textFirstQ, "O número inserido é par!");
    } else if (isOdd) {
      writeLegend(textFirstQ, "O número inserido é ímpar!");
    } else {
      writeLegend(
        textFirstQ,
        "Não foi possível identificar o número, insira um número inteiro."
      );
    }
  });
};
