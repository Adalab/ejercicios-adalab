"use strict";

const textElement = document.querySelector(".text");

function addText(event) {
  const textSecond = "Lorem Ipsum";
  textElement.innerHTML = textElement.innerHTML + "textSecond";
  return textElement;
}

Text.addEventListener("mouseover", addText);
