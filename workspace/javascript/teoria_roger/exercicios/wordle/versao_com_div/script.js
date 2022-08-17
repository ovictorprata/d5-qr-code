let lista = ["", "", "", "", ""];
let tentativas = [];
let i = 0;

let variaveis = document.querySelectorAll("div.caixa-jogo");

function PegarTecla(caractere) {
  if (tentativas.length == 0) {
    // se lenght == 0 e backpase OU lenght = 5 e letra --> return
    if (lista[0] == "" && caractere.keyCode == 8) {
      return;
    } else if (caractere.keyCode == 8 && i >= 0) {
      lista[--i] = "";
      console.log(i);
    } else if (i < 5 && i >= 0) {
      //lista[i++] = String.fromCharCode(caractere.keyCode).toUpperCase();
      lista[i++] = caractere.key.toUpperCase();
      console.log(i);
    } else if (i == 5 && caractere.keyCode == 13) {
      console.log(i);
      tentativas.push(lista.join(""));
    }
    variaveis[0].innerHTML = lista[0];
    variaveis[1].innerHTML = lista[1];
    variaveis[2].innerHTML = lista[2];
    variaveis[3].innerHTML = lista[3];
    variaveis[4].innerHTML = lista[4];
  } else if (tentativas.length == 1) {
    // se lenght == 0 e backpase OU lenght = 5 e letra --> return
    if (lista[0] == "" && caractere.keyCode == 8) {
      return;
    } else if (caractere.keyCode == 8 && i >= 0) {
      lista[--i] = "";
      console.log(i);
    } else if (i < 5 && i >= 0) {
      //lista[i++] = String.fromCharCode(caractere.keyCode).toUpperCase();
      lista[i++] = caractere.key.toUpperCase();
      console.log(i);
    } else if (i == 5 && caractere.keyCode == 13) {
      console.log(i);
      tentativas.push(lista.join(""));
    }
    div1.innerHTML = lista[0];
    div2.innerHTML = lista[1];
    div3.innerHTML = lista[2];
    div4.innerHTML = lista[3];
    div5.innerHTML = lista[4];
  }
  l2c1.innerHTML = tentativas;
}
