import { writeLegend } from "../utils/writeLegend.js";

const URL = "https://dummyjson.com/auth/login";
const TWO_SEC = 2000
const STATUS_ERRORS = 300
const form = document.querySelector(".login-form");
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const alertMessage = document.querySelector(".alert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let username = usernameField.value;
  let password = passwordField.value;

  try {
    let response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username, //'kminchelle'
        password: password //'0lelplR'
      })
    });

    let data = await response.json();

    if (response.status >= STATUS_ERRORS) {
      throw new Error(data.message);
    } 
    
    else {
      localStorage.setItem("root:user", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "badge.html";
      }, TWO_SEC);
    }

    alertMessage.style.color = "green";

    writeLegend(alertMessage,"Login bem sucedido!");

  } 
  
  catch (error) {
    alertMessage.style.color = "red";

    if (error.message === "Invalid credentials") {
      writeLegend(alertMessage,"Usuário ou senha inválidos");
    } 
    
    else {
      writeLegend(alertMessage,error.message);
    }
  }
});
