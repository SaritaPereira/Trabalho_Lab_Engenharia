function verificarTipo() {
  var dado = document.getElementById("inputDado").value;
    
  var desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
  
  if (desejaVerificar) {      
    var tipo = typeof dado;
    document.getElementById("resultado").innerHTML = "O tipo do dado é: " + tipo;
  } else {
    document.getElementById("resultado").innerHTML = "Obrigado por visitar esta página!";
  }
}
  