const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBotao = document.getElementById(this.id);
    const categoriaBotao = elementoBotao.value;
    let livrosFiltrados = categoriaBotao == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaBotao);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoriaBotao == "disponivel") {
        const valorTotalLivrosDisponiveis = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotalLivrosDisponiveis);
    }
}


function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}


function filtrarPorCategoria(categoriaBotao) {
    return livros.filter(livro => livro.categoria == categoriaBotao);
}

function exibirValorTotalLivrosDisponiveis(valorTotalLivrosDisponiveis) {
    elementoValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivrosDisponiveis}</span></p>
    </div>
    `
}