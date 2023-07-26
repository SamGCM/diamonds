import { writeLegend } from "../writeLegend";

export const questionEight = () => {
  let inputEightQ = document.getElementById("eightQ-field");
  let textEightQ = document.getElementById("eightQ-legend");
  const ZERO = 0;

  inputEightQ.addEventListener("change", (e) => {
    let isNumberPositive = e.target.value > 0;

    if (isNumberPositive) {
      let text = "";

      for (let i = 1; i <= e.target.value; i++) {
        if (i % 2 !== 0) {
          text = text + " " + i;
          writeLegend(textEightQ, text);
        }
      }
    } else {
      writeLegend(textEightQ, "Erro, insira um número maior que 0.");
    }
  });
};
