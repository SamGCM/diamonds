import { writeLegend } from "../writeLegend";

export const questionSeven = () => {
  let inputSevenQ = document.getElementById("sevenQ-field");
  let textSevenQ = document.getElementById("sevenQ-legend");
  const ZERO = 0;

  inputSevenQ.addEventListener("change", (e) => {
    let isNumberPositive = e.target.value > ZERO;
    let sum = 0;

    if (isNumberPositive) {
      for (let i = 0; i <= e.target.value; i++) {
        sum = sum + i;
        writeLegend(textSevenQ, sum);
      }
    } else {
      writeLegend(textSevenQ, "Erro, insira um número maior que 0.");
    }
  });
};
