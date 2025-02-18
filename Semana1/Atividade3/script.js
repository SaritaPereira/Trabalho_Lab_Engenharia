function calcularFatorial() {
  var numero = document.getElementById("numero").value;
  
  numero = parseInt(numero);
  
  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, digite um número válido e positivo.");
  } else {
    var fatorial = 1;
  
    for (var i = 1; i <= numero; i++) {
      fatorial *= i;
    }
 
    alert("O fatorial de " + numero + " é " + fatorial + ".");
  }
}
  