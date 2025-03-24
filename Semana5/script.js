document.addEventListener("DOMContentLoaded", function () {
    const divContador = document.getElementById("contador");

    const container = document.createElement("div");
    container.classList.add("container");

    // Seção do Total
    const totalBox = document.createElement("div");
    totalBox.classList.add("total-box");

    const titulo = document.createElement("h2");
    titulo.innerText = "Total";

    const totalNumero = document.createElement("input");
    totalNumero.setAttribute("type", "text");
    totalNumero.setAttribute("readonly", "true");
    totalNumero.classList.add("total-numero");
    totalNumero.value = "0";

    const btnReset = document.createElement("button");
    btnReset.classList.add("btn-reset");
    btnReset.innerText = "Resetar";
    btnReset.onclick = () => {
        homens.numero.innerText = "0";
        mulheres.numero.innerText = "0";
        atualizarTotal();
    };

    totalBox.appendChild(titulo);
    totalBox.appendChild(totalNumero);
    totalBox.appendChild(btnReset);

    // Criando contadores lado a lado
    const contadoresBox = document.createElement("div");
    contadoresBox.classList.add("contadores-box");

    const homens = criarContador("Homens", "img/homem.png");
    const mulheres = criarContador("Mulheres", "img/mulher.png");

    const containerContador = document.createElement("div");
    containerContador.style.display = "flex";

    containerContador.appendChild(homens.box);
    containerContador.appendChild(mulheres.box);

    container.appendChild(containerContador);

    container.appendChild(totalBox);
    container.appendChild(contadoresBox);
    divContador.appendChild(container);

    function criarContador(tipo, imagemSrc) {
        const box = document.createElement("div");
        box.classList.add("contador-box");

        const imagem = document.createElement("img");
        imagem.src = imagemSrc;
        imagem.alt = tipo;
        imagem.classList.add("contador-img");

        const label = document.createElement("p");
        label.innerText = tipo;

        const btnMais = document.createElement("button");
        btnMais.classList.add("btn-controle", "btn-mais");
        const imgMais = document.createElement("img");
        imgMais.src = "img/adicionar.png";
        imgMais.alt = "Adicionar";
        btnMais.appendChild(imgMais);
        btnMais.onclick = () => {
            numero.innerText = parseInt(numero.innerText) + 1;
            atualizarTotal();
        };

        const btnMenos = document.createElement("button");
        btnMenos.classList.add("btn-controle", "btn-menos");
        const imgMenos = document.createElement("img");
        imgMenos.src = "img/subtrair.png";
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
        numero.classList.add("contador-numero");
        numero.innerText = "0";

        const numeroBox = document.createElement("div");
        numeroBox.classList.add("numero-box");
        numeroBox.appendChild(numero);

        const botoes = document.createElement("div");
        botoes.classList.add("botoes-box");
        botoes.appendChild(btnMenos);
        botoes.appendChild(btnMais);

        box.appendChild(imagem);
        box.appendChild(label);
        box.appendChild(botoes);
        box.appendChild(numeroBox);

        return { box, numero };
    }

    function atualizarTotal() {
        totalNumero.value =
            parseInt(homens.numero.innerText) + parseInt(mulheres.numero.innerText);
    }
});
