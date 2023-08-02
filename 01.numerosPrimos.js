function numeroPrimo(numero) {
  for (let indice = 2; indice < numero; indice++) {
    if (numero % indice === 0 || numero < 2) return false;
  }
  return true;
}

// Teste a função
console.log(numeroPrimo(7)); // Saída esperada: true
console.log(numeroPrimo(12)); // Saída esperada: false

/*
function P(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Teste a função
console.log(P(7)); // Saída esperada: true
console.log(P(12)); // Saída esperada: false
*/
