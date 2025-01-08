export default class Pedido {

    constructor(cliente) {
        this.cliente = cliente;
        this.livros = [];
        this._dataPedido = new Date().toDateString();

    }

    adicionarLivro(livro) {
            this.livros.push(livro);
            console.log("Livro adicionado ao seu pedido com sucesso!");
        }

    calcularTotal(precos) {
                
    }
}
