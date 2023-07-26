import { writeLegend } from "../writeLegend";

export const questionSix = () => {
  let inputSixQ = document.getElementById("sixQ-field");
  let textSixQ = document.getElementById("sixQ-legend");
  const ZERO = 0;

  inputSixQ.addEventListener("change", (e) => {
    let numberIsPositive = e.target.value > ZERO;

    if (numberIsPositive) {
      let text = "";

      for (let i = 0; i <= e.target.value; i++) {
        text = text + " " + i;
        writeLegend(textSixQ, text);
      }
    } else {
      writeLegend(textSixQ, "Erro, insira um número maior que 0.");
    }
  });
};
