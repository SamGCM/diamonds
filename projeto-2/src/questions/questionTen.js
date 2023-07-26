import { writeLegend } from "../writeLegend";

export const questionTen = () => {
  let inputTenQ = document.getElementById("tenQ-field");
  let textTenQ = document.getElementById("tenQ-legend");
  const LIMIT_NUMBER = 50;

  inputTenQ.addEventListener("change", (e) => {
    if (e.target.value.includes("/")) {
      let arr = e.target.value.split("/");
      let total = 0;

      arr.forEach((item) => {
        let number = parseInt(item);
        if (number < LIMIT_NUMBER) {
          total = total + number;
        }
      });

      writeLegend(textTenQ, total);
    } else {
      writeLegend(textTenQ, "Insira números com '/' entre eles.");
    }
  });
};
