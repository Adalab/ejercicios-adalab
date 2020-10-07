"use strict";

const textElement = document.querySelector(".text");
const buttonElement = document.querySelector(".button");

function clickOn(event) {
  textElement.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió";
}

buttonElement.addEventListener("click", clickOn);
