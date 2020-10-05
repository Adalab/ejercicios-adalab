"use strict";

const userOne = "Lorena";
const userTwo = "Maribel";
const welcomeText = document.querySelector(".welcome__text");

let userName = "Lorena";
//userName = "Maribel";

if (userName === userOne || userName === userTwo) {
  welcomeText.innerHTML = `Bienvenida ${userName}!`;
} else {
  welcomeText.innerHTML =
    "Lo siento pero el usuario que has introducido no está registrado";
}
