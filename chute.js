const chute = document.getElementById('chute');
const iniciarPalpite = document.getElementById('startGame');
const iniciarNovoJogo = document.getElementById('newGame');
const resposta = document.getElementById('response');
const mensagemDica = document.getElementById('message');

let numero = Math.floor(Math.random() * 100 + 1);
const tentativas = [];

const jogo = () => {
  const palpite = parseInt(chute.value);
  tentativas.push(palpite);
  if (palpite === numero) {
    const gratificacao = resposta.appendChild(document.createElement('h2'));
    gratificacao.innerText = 'Parabéns você acertou o número!';

    const mensagemParagrafo = resposta.appendChild(document.createElement('p')); // Cria um elemento 'p'
    mensagemParagrafo.innerText = `Você acertou o número na ${tentativas.length}ª tentativa`;

    iniciarPalpite.disabled = true;
    iniciarPalpite.style.display = 'none';
    iniciarNovoJogo.disabled = false;
    iniciarNovoJogo.style.display = 'flex';
    chute.style.backgroundColor = 'rgb(5, 119, 190)';
  } else {
    mensagemDica.innerText = 'Continue jogando, a sorte encontra que persiste!';
  }
};

const novoJogo = () => {
  numero = Math.floor(Math.random() * 10 + 1);
  mensagemDica.innerText = '';

  iniciarPalpite.disabled = false;
  iniciarPalpite.style.display = 'flex';
  iniciarNovoJogo.disabled = true;
  iniciarNovoJogo.style.display = 'none';
  chute.style.backgroundColor = 'rgb(5, 119, 190)';

  resposta.removeChild(resposta.querySelector('h2'));
  resposta.removeChild(resposta.querySelector('p'));
  mensagemDica.innerText = '';
  tentativas.splice(0);
};
