let brincar = prompt('Vamos brincar de adivinhar? (Responda S para sim ou N para não').toUpperCase();

while (brincar === 'S') {
  const chute = parseInt(prompt('Digite seu chute: (um numero entre 1 e 100)'));
  let numero = Math.floor(Math.random() * 100 + 1);

  if (chute == numero) {
    alert('Você acertou! Hoje é seu dia de sorte!');
  } else {
    let contMais = chute;
    const limiteMais = chute + 5;
    const limiteMenos = chute - 5;
    let contMenos = chute;

    while (contMais < limiteMais || contMenos > limiteMenos) {
      if (contMais === numero || contMenos === numero) {
        console.log(contMais);
        console.log(contMenos);
        console.log(numero);
        alert('Passou perto, mas não foi dessa vez!');
      } else {
        contMais++;
        contMenos--;
      }
    }
    alert('O numero era: ' + numero + '\nBoa sorte na proxima!');
  }
  brincar = prompt('Vamos brincar de adivinhar? (Responda S para sim ou N para não').toUpperCase();
}

alert('Até a proxima! ');
