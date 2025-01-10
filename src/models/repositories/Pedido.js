export default class Pedido {

    constructor(cliente) {
        this.cliente = cliente;
        this._livros = [];
        this._dataPedido = new Date().toDateString();

    }

    adicionarLivro(livro) {
        this._livros.push(livro);
        console.log(`O livro ${livro._titulo} foi adicionado com sucesso!`)
    }

    calcularTotal(precos) {

    }
}
