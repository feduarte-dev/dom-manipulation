// Seu código aqui
// Exercício 1
const ex1 = document.querySelectorAll(".center-content p");
ex1[1].innerHTML = "Rico";

// Exercício 2
const ex2 = document.getElementsByClassName("main-content");
ex2[0].style.backgroundColor = "rgb(76, 164, 109)";

// Exercício 3
const ex3 = document.querySelectorAll(".main-content .center-content");
ex3[0].style.backgroundColor = "white";

// Exercício 4
const ex4 = document.getElementsByClassName("title");
ex4[0].innerHTML = "Desafio - JavaScript";

// Exercício 5
const ex5 = document.querySelector(".center-content p");
ex5.innerHTML = "TEXTO PADRÃO DO NOSSO SITE";

// Exercício 6
const ex6 = document.querySelectorAll(".center-content p");
let ex7 = document.querySelector("footer p");
let separacao = "";
for (let index = 0; index < ex6.length; index += 1) {
  separacao += ex6[index].innerText + " ";
  // Código commitado anteriormente é diferente do atual, recebi ajuda do Nicolas na monitoria summer para refatorar o conteudo do loop.
}
ex7.innerText = separacao;
