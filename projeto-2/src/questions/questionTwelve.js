import { writeLegend } from "../writeLegend";

export const questionTwelve = () => {
  let inputTwelveQ = document.getElementById("twelveQ-field");
  let textTwelveQ = document.getElementById("twelveQ-legend");
  const INDEX_FIRST_LETTER = 0;

  inputTwelveQ.addEventListener("change", (e) => {
    let word = e.target.value;
    let size = word.length;
    let indexLastLetter = size - 1;

    function upperCaseFirstLetter(text) {
      let letter = text[INDEX_FIRST_LETTER];
      let newWord = word.replace(letter, letter.toUpperCase());
      return newWord;
    }

    function lowerCaseLastLetter(text) {
      let arrLetters = text.split("");
      let lastLetterUpper = arrLetters[indexLastLetter].toUpperCase();

      arrLetters[indexLastLetter] = lastLetterUpper;

      return arrLetters.join("");
    }

    word = upperCaseFirstLetter(word);
    word = lowerCaseLastLetter(word);

    writeLegend(textTwelveQ, word);
  });
};
