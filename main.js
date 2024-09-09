import { gerarNumeroAleatorio, verificarAcerto } from './game.js';
import { solicitarPalpite, mostrarMensagem, mostrarTentativa } from './ui.js';

const numeroDeTentativas = 10;

function iniciarJogo() {
  const numero = gerarNumeroAleatorio();
  mostrarMensagem("Jogo começando...");

  for (let i = 0; i < numeroDeTentativas; i++) {
    let palpite = parseInt(solicitarPalpite(), 10);
    if (verificarAcerto(numero, palpite)) {
      mostrarMensagem("Parabéns! Você acertou o número!");
      break;
    } else if (numero < palpite) {
      mostrarMensagem("Você errou! O número é menor que o palpite. Tente novamente.");
    } else {
      mostrarMensagem("Você errou! O número é maior que o palpite. Tente novamente.");
    }
    mostrarTentativa(i + 1, numeroDeTentativas);
  }

  mostrarMensagem(`Fim do jogo! O número secreto era ${numero}.`);
}


window.iniciarJogo = iniciarJogo;