"use strict";

const mainTitle = document.querySelector(".title");
const item1 = document.querySelector(".list__item1");
const item2 = document.querySelector(".list__item2");

mainTitle.innerHTML = mainTitle.innerHTML + " " + item2.textContent;
