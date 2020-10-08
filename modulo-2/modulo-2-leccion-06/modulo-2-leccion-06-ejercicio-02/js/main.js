"use strict";

const adalaber1 = {};
adalaber1.run = () => console.log("Estoy corriendo"); //Declaro la funcion
adalaber1.runMarathon = (distance) =>
  console.log("Estoy corriendo un maratón de " + distance + " kilómetros.");

adalaber1.run(); //Llamo a la función
adalaber1.runMarathon(50);
