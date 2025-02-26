let itens = [];

function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const novoItem = itemInput.value.trim();

    if (novoItem === "") {
        alert("Por favor, insira um item!");
        return;
    }

    itens.push(novoItem);

    itens.sort();

    atualizarLista();

    itemInput.value = "";
}

function atualizarLista() {
    const listaElement = document.getElementById('listaItems');

    listaElement.innerHTML = "";

    for (let item of itens) {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        listaElement.appendChild(listItem);
    }
}
