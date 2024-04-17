/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const quien = ["Mi perro", "Mi abuelo", "Mi gato", "Mi pez"];
const hizo = ["se comió", "vendió", "fumó", "destruyó"];
const que = ["mi tarea", "mi casa", "mi telefono", "mi dinero"];
const cuando = ["ayer", "hoy", "el año pasado", "la semana pasada"];

function randomIndex(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function() {
  //write your code here
  console.log("Hola Mundo!");

  //Crear un excusa aleatoria

  const excusa =
    quien[randomIndex(quien.length)] +
    " " +
    hizo[randomIndex(hizo.length)] +
    " " +
    que[randomIndex(que.length)] +
    " " +
    cuando[randomIndex(cuando.length)];

  // Modificar el HTML para que muestre exucusas aleatorias

  document.querySelector("div").innerText = excusa;
};
