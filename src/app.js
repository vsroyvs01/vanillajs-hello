/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function numeroAleatorio(len = 3) {
    let number = Math.floor(Math.random() * (len - 1));
    return number;
  }
  function generarEscusas() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let escusaArray = [];

    escusaArray.push(who[numeroAleatorio(who.length)]);
    escusaArray.push(action[numeroAleatorio(action.length)]);
    escusaArray.push(what[numeroAleatorio(what.length)]);
    escusaArray.push(when[numeroAleatorio(when.length)]);

    return escusaArray;
  }

  function AddHtmlEscusa() {
    let escusa = generarEscusas();
    let htmlContent = "<h1>" + escusa.join(" ") + "</h1>";
    return htmlContent;
  }

  // Selección del tag con el ID "excuse"
  var contenedor = document.getElementById("excuse");

  // Agregar el HTML al contenido del div
  excuse.innerHTML = AddHtmlEscusa();

  console.log(numeroAleatorio());
  console.log("Hello Rigo from the console!");
};
