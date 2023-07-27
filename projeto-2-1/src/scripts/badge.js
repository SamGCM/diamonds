import { genderTranslate } from "../utils/genderTranslate.js";

const image = document.getElementById("image");
const idNumber = document.getElementById("id-number");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const gender = document.getElementById("gender");

const loadData = () => {
    if (localStorage.getItem("root:user")) {
        const data = JSON.parse(localStorage.getItem("root:user"))
    
        image.setAttribute("src", data.image);
        idNumber.innerText = `ID ${data.id}`;
        firstName.innerText = data.firstName;
        lastName.innerText = data.lastName;
        email.innerText = data.email;
        gender.innerText = genderTranslate(data.gender);
    }

    else {

    }
}

loadData();