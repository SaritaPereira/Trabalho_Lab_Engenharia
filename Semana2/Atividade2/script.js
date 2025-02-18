function atualizarRelogio() {
  var agora = new Date();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();

  if (horas < 10) {
    horas = '0' + horas;
  }
  if (minutos < 10) {
    minutos = '0' + minutos;
  }
  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  document.getElementById('relogio').innerText = horas + ':' + minutos + ':' + segundos;
}
  
setInterval(atualizarRelogio, 1000);
  
atualizarRelogio();
  