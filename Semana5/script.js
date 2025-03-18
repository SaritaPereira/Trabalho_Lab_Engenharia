const divContador = document.getElementById("contador");

const container = document.createElement("div");
container.classList.add("container");

const titulo = document.createElement("h2");
titulo.innerText = "Contador de Pessoas";
s
const totalTexto = document.createElement("p");
totalTexto.innerHTML = "<strong>Total:</strong> ";
const totalNumero = document.createElement("span");
totalNumero.classList.add("total");
totalNumero.innerText = "0";
totalTexto.appendChild(totalNumero);

const homens = criarContador("Homens", "Semana5/img/homem.png");
const mulheres = criarContador("Mulheres", "Semana5/img/mulher.png");

const btnReset = document.createElement("button");
const imgReset = document.createElement("img");
imgReset.src = "Semana5/img/reset.png";
imgReset.alt = "Resetar";
btnReset.appendChild(imgReset);
btnReset.onclick = () => {
    homens.numero.innerText = "0";
    mulheres.numero.innerText = "0";
    atualizarTotal();
};

container.appendChild(titulo);
container.appendChild(totalTexto);
container.appendChild(homens.box);
container.appendChild(mulheres.box);
container.appendChild(btnReset);
divContador.appendChild(container);

function criarContador(tipo, imagemSrc) {
    const box = document.createElement("div");
    box.classList.add("contador-box");

    const imagem = document.createElement("img");
    imagem.src = imagemSrc;
    imagem.alt = tipo;

    const label = document.createElement("p");
    label.innerText = tipo;

    const btnMenos = document.createElement("button");
    const imgMenos = document.createElement("img");
    imgMenos.src = "Semana4/img/subtrair.png";
    imgMenos.alt = "Subtrair";
    btnMenos.appendChild(imgMenos);
    btnMenos.onclick = () => {
        let valor = parseInt(numero.innerText);
        if (valor > 0) {
            numero.innerText = valor - 1;
            atualizarTotal();
        }
    };

    const numero = document.createElement("span");
    numero.innerText = "0";

    const btnMais = document.createElement("button");
    const imgMais = document.createElement("img");
    imgMais.src = "Semana4/img/adicionar.png";
    imgMais.alt = "Adicionar";
    btnMais.appendChild(imgMais);
    btnMais.onclick = () => {
        numero.innerText = parseInt(numero.innerText) + 1;
        atualizarTotal();
    };

    box.appendChild(imagem);
    box.appendChild(label);
    box.appendChild(btnMenos);
    box.appendChild(numero);
    box.appendChild(btnMais);

    return { box, numero };
}

function atualizarTotal() {
    totalNumero.innerText =
        parseInt(homens.numero.innerText) + parseInt(mulheres.numero.innerText);
}