function obterNomeDiaSemana(dia) {
    let nomeDia;
    switch(dia) {
      case 0:
        nomeDia = 'Domingo';
        break;
      case 1:
        nomeDia = 'Segunda-feira';
        break;
      case 2:
        nomeDia = 'Terça-feira';
        break;
      case 3:
        nomeDia = 'Quarta-feira';
        break;
      case 4:
        nomeDia = 'Quinta-feira';
        break;
      case 5:
        nomeDia = 'Sexta-feira';
        break;
      case 6:
        nomeDia = 'Sábado';
        break;
      default:
        nomeDia = 'Dia inválido';
    }
    return nomeDia;
}
  
function obterNomeMes(mes) {
   let nomeMes;
   switch(mes) {
    case 0:
      nomeMes = 'janeiro';
      break;
    case 1:
      nomeMes = 'fevereiro';
      break;
    case 2:
      nomeMes = 'março';
      break;
    case 3:
      nomeMes = 'abril';
      break;
    case 4:
      nomeMes = 'maio';
      break;
    case 5:
      nomeMes = 'junho';
      break;
    case 6:
      nomeMes = 'julho';
      break;
    case 7:
      nomeMes = 'agosto';
      break;
    case 8:
      nomeMes = 'setembro';
      break;
    case 9:
      nomeMes = 'outubro';
      break;
    case 10:
      nomeMes = 'novembro';
      break;
    case 11:
      nomeMes = 'dezembro';
      break;
    default:
       nomeMes = 'Mês inválido';
  }
  return nomeMes;
}
  
function exibirDataAtual() {
  const dataAtual = new Date();
  
  const diaSemana = obterNomeDiaSemana(dataAtual.getDay());
  const dia = dataAtual.getDate();
  const mes = obterNomeMes(dataAtual.getMonth());
    
  let ano = dataAtual.getYear() + 1900;
 
  const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  
  document.getElementById('dataAtual').innerText = dataFormatada;
}
  
window.onload = exibirDataAtual;
  