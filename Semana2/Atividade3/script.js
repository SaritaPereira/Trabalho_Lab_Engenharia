function verificarPalindromo() {
  var texto = document.getElementById("texto").value;
  var textoInvertido = texto.split('').reverse().join('');
  
  if (texto === textoInvertido) {
    alert("É um palíndromo!");
  } else {
    alert("Não é um palíndromo!");
  }
}
  