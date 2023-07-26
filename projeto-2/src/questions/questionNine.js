import { writeLegend } from "../writeLegend";

export const questionNine = () => {
  let inputNineQ = document.getElementById("nineQ-field");
  let textNineQ = document.getElementById("nineQ-legend");
  const LIMIT_NUMBER = 30;

  inputNineQ.addEventListener("change", (e) => {
    if (e.target.value.includes("-")) {
      let arr = e.target.value.split("-");
      let total = 0;

      arr.forEach((item) => {
        let number = parseInt(item);
        if (number < LIMIT_NUMBER) {
          total = total + number;
        }
      });

      writeLegend(textNineQ, total);
    } else {
      writeLegend(textNineQ, "Insira números com '-' entre eles.");
    }
  });
};
