document.addEventListener('DOMContentLoaded', () => {
    const precoFrutas = {
        laranja: 2.50,
        maca: 3.50,
        banana: 1.50,
        uva: 4.50
    };

    const carrinho = [];
    const formCarrinho = document.getElementById('formCarrinho');
    const carrinhoDiv = document.getElementById('carrinho');

    function atualizarCarrinho() {
        carrinhoDiv.innerHTML = '';
        let total = 0;

        if (carrinho.length === 0) {
            carrinhoDiv.innerHTML = '<p>O carrinho está vazio.</p>';
            return;
        }

        const ul = document.createElement('ul');
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.quantidade} x ${item.nome} - R$ ${(item.quantidade * item.preco).toFixed(2)}`;
            ul.appendChild(li);
            total += item.quantidade * item.preco;
        });

        const totalP = document.createElement('p');
        totalP.textContent = `Total: R$ ${total.toFixed(2)}`;
        carrinhoDiv.appendChild(ul);
        carrinhoDiv.appendChild(totalP);
    }

    function adicionarCarrinho() {
        const selectFrutas = document.getElementById('frutas');
        const quantidadeInput = document.getElementById('quantidade');
        const frutaSelecionada = selectFrutas.options[selectFrutas.selectedIndex].value;
        const quantidade = parseInt(quantidadeInput.value);

        if (!quantidade || quantidade <= 0) {
            alert('Por favor, insira o valor desejado!.');
            return;
        }

        if (!precoFrutas[frutaSelecionada]) {
            alert('Fruta selecionada não disponível.');
            return;
        }

        carrinho.push({
            nome: selectFrutas.options[selectFrutas.selectedIndex].text.split(' -')[0],
            preco: precoFrutas[frutaSelecionada],
            quantidade: quantidade
        });

        atualizarCarrinho();
        quantidadeInput.value = '';
    }

    document.querySelector('button').addEventListener('click', adicionarCarrinho);

});


