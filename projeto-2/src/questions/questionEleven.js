import { writeLegend } from "../writeLegend";

export const questionEleven = () => {
  let inputElevenQ = document.getElementById("elevenQ-field");
  let textElevenQ = document.getElementById("elevenQ-legend");

  inputElevenQ.addEventListener("change", (e) => {
    let chars = e.target.value.split("");
    let size = chars.length;
    let newArr = [];

    for (let i = 0; i < size; i++) {
      newArr.unshift(chars[i]);
    }

    let result = newArr.reduce((initial, value) => {
      return initial + value;
    }, "");

    writeLegend(textElevenQ, result);
  });
};
