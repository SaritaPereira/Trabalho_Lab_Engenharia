class Carro {
    constructor(marca, modelo, ano, cor, kilometragem, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valorFipe = valorFipe;
    }

    anosUtilizacao() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    valorMercado() {
        const kmPorAno = this.kilometragem / this.anosUtilizacao();

        if (kmPorAno <= 30000) {
            return this.valorFipe * 1.10;
        } else if (kmPorAno <= 50000) {
            return this.valorFipe; 
        } else {
            return this.valorFipe * 0.90; 
        }
    }
}

function cadastrarCarro(event) {
    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const kilometragem = parseInt(document.getElementById("kilometragem").value);
    const valorFipe = parseFloat(document.getElementById("valorFipe").value);

    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valorFipe);

    exibirInformacoesCarro(carro);
}

function exibirInformacoesCarro(carro) {
    const infoCarroDiv = document.getElementById("infoCarro");

    const anos = carro.anosUtilizacao();
    const valor = carro.valorMercado().toFixed(2);

    infoCarroDiv.innerHTML = `
        <p>Marca: ${carro.marca}</p>
        <p>Modelo: ${carro.modelo}</p>
        <p>Ano: ${carro.ano}</p>
        <p>Cor: ${carro.cor}</p>
        <p>Kilometragem: ${carro.kilometragem} km</p>
        <p>Valor FIPE: R$ ${carro.valorFipe.toFixed(2)}</p>
        <p>Tem ${anos} anos de utilização.</p>
        <p>Valor de Mercado: R$ ${valor}</p>
    `;
}

document.getElementById("carForm").addEventListener("submit", cadastrarCarro);
