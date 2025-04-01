document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const calculadora = document.createElement("div");
    calculadora.className = "calculadora";

    const display = document.createElement("div");
    display.className = "display";
    display.textContent = "0";

    const botoesContainer = document.createElement("div");
    botoesContainer.className = "botoes";

    const botoes = [
        "AC", "±", "%", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "−",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    botoes.forEach((texto) => {
        const botao = document.createElement("button");
        botao.textContent = texto;

        if (["÷", "×", "−", "+", "="].includes(texto)) {
            botao.classList.add("operador");
        } else if (["AC", "±", "%"].includes(texto)) {
            botao.classList.add("cinza");
        }

        if (texto === "0") {
            botao.classList.add("zero"); 
        }

        botao.addEventListener("click", () => handleClick(texto, display));
        botoesContainer.appendChild(botao);
    });

    calculadora.appendChild(display);
    calculadora.appendChild(botoesContainer);
    app.appendChild(calculadora);
});


function handleClick(texto, display) {
    if (texto === "AC") {
        display.textContent = "0";
    } else if (texto === "=") {
        try {
            display.textContent = eval(display.textContent.replace("×", "*").replace("÷", "/"));
        } catch {
            display.textContent = "Erro";
        }
    } else {
        if (display.textContent === "0") {
            display.textContent = texto;
        } else {
            display.textContent += texto;
        }
    }
}
