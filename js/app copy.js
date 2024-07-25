// function alterarStatus(id) {
//   let gameClicado = document.getElementById(`game-${id}`);
//   let imagem = gameClicado.querySelector(".dashboard__item__img");
//   let botao = gameClicado.querySelector(".dashboard__item__button");
//   let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

//   if (imagem.classList.contains("dashboard__item__img--rented")) {
//     imagem.classList.remove("dashboard__item__img--rented");
//     imagem.classList.remove("dashboard__item__button--return");
//     botao.textContent = "Alugar";
//   } else {
//     imagem.classList.add("dashboard__item__img--rented");
//     imagem.classList.add("dashboard__item__button--return");
//     botao.textContent = "Devolver";
//   }
// }


// Dicas e desafios com outras formas de fazer a lógica funcionar


// function alterarStatus(id) {
//   let gameClicado = document.getElementById(`game-${id}`);
//   let imagem = gameClicado.querySelector(".dashboard__item__img");
//   let botao = gameClicado.querySelector(".dashboard__item__button");
//   let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

//   if (imagem.classList.contains("dashboard__item__img--rented")) {
//     // Adiciona uma confirmação antes de devolver o jogo

//     if (
//       confirm(
//         `Você tem certeza que quer devolver o jogo ${nomeJogo.textContent}?`
//       )
//     ) {
//       imagem.classList.remove("dashboard__item__img--rented");
//       botao.classList.remove("dashboard__item__button--return");
//       botao.textContent = "Alugar";
//     }
//   } else {
//     imagem.classList.add("dashboard__item__img--rented");
//     botao.classList.add("dashboard__item__button--return");
//     botao.textContent = "Devolver";
//   }
// }

// let jogosAlugados = 0;

// function contarEexibirJogosAlugados() {
//   console.log(`Total de jogos alugados: ${jogosAlugados}`);
// }

// function alterarStatus(id) {
//   let gameClicado = document.getElementById(`game-${id}`);
//   let imagem = gameClicado.querySelector(".dashboard__item__img");
//   let botao = gameClicado.querySelector(".dashboard__item__button");
//   let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

//   if (imagem.classList.contains("dashboard__item__img--rented")) {
//     imagem.classList.remove("dashboard__item__img--rented");
//     botao.classList.remove("dashboard__item__button--return");
//     botao.textContent = "Alugar";
//     jogosAlugados--;
//   } else {
//     imagem.classList.add("dashboard__item__img--rented");
//     botao.classList.add("dashboard__item__button--return");
//     botao.textContent = "Devolver";
//     jogosAlugados++;
//   }
// }

// contarEexibirJogosAlugados();

// // Inicializa a contagem considerando que os jogos começam alugados

// document.addEventListener("DOMContentLoaded", function () {
//   jogosAlugados = document.querySelectorAll(
//     ".dashboard__item__img--rented"
//   ).length;
//   contarEexibirJogosAlugados();
// });




