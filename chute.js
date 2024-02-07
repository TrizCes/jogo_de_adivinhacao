const chute = document.getElementById('chute');
const iniciarPalpite = document.getElementById('startGame');
const iniciarNovoJogo = document.getElementById('newGame');
const resposta = document.getElementById('response');
const mensagemDica = document.getElementById('message');

let numero = Math.floor(Math.random() * 10 + 1);
const tentativas = [];

const jogo = () => {
  console.log(chute.value);
  const palpite = parseInt(chute.value);
  console.log('jogando');
  tentativas.push(palpite);
  if (palpite === numero) {
    const gratificacao = resposta.appendChild(document.createElement('h2'));
    gratificacao.innerText = 'Parabéns você acertou o número!';

    const mensagemParagrafo = resposta.appendChild(document.createElement('p')); // Cria um elemento 'p'
    mensagemParagrafo.innerText = `Você acertou o número na ${tentativas.length}ª tentativa`;

    iniciarPalpite.disabled = true;
    iniciarNovoJogo.disabled = false;
  } else {
    mensagemDica.innerText = 'Continue jogando, a sorte encontra que persiste!';
  }
};

const novoJogo = () => {
  numero = Math.floor(Math.random() * 10 + 1);
  mensagemDica.innerText = '';
  iniciarPalpite.disabled = false;
  iniciarNovoJogo.disabled = true;
  resposta.removeChild(resposta.querySelector('h2'));
  resposta.removeChild(resposta.querySelector('p'));
};
