import { writeLegend } from "../writeLegend";

export const questionFive = () => {
  let inputFiveQ = document.getElementById("fiveQ-field");
  let textFiveQ = document.getElementById("fiveQ-legend");

  inputFiveQ.addEventListener("change", (e) => {
    const dayOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ];
    const dayInitialNumber = 1;
    const dayLastNumber = 7;
    const subtractDayIndex = 1;

    if (e.target.value >= dayInitialNumber && e.target.value <= dayLastNumber) {
      let nameDay = dayOfWeek[e.target.value - subtractDayIndex];
      writeLegend(textFiveQ, nameDay);
    } else {
      writeLegend(textFiveQ, "Erro, insira um número de 1 a 7");
    }
  });
};
