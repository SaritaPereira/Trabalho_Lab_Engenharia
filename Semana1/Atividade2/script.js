function verificarNumero() {
  var numero = document.getElementById("numero").value;

  numero = parseInt(numero);

  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, digite um número válido e positivo.");
  } else {
    var ehPrimo = true;

    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  
    if (ehPrimo && numero > 1) {
      alert("O número " + numero + " é primo.");
    } else {
      alert("O número " + numero + " não é primo.");
    }
  }
}
  