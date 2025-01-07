import Cliente from "./Cliente.js";

export default class Pedido {

    constructor() {
        this.cliente = Cliente;
        this.livros = [];
        this._dataPedido = new Date().toDateString();

    }

    adicionarLivro(livro) {
            this.livros.push(livro);
            console.log("Livro adicionado com sucesso!");
        }

    calcularTotal() {
        
    }
}
