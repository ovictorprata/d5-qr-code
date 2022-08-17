var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var jogo = document.querySelector("div.jogo");
let lista = [];

function PegarTecla(caractere) {
  console.log(caractere);
  if (lista.length <= 4 && caractere.keyCode != 8) {
    lista.push(String.fromCharCode(caractere.keyCode).toUpperCase());
  }
  if (caractere.keyCode == 8) {
    lista.pop();
    // lista[lista.length - 1] = "";
  }

  div1.innerHTML = lista;

  // div1.innerHTML = String.fromCharCode(event.keyCode).toUpperCase();
}

// You can do the same with all the other keys. No input tag needed.
