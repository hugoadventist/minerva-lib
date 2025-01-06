import Cliente from "./Cliente.js";
import Livraria from "./Livraria.js";

export default class Pedido {

    cliente = Cliente;
    livros = [];
    
    constructor(cliente, livros) {
        this.cliente = cliente;
        this.livros = livros;
        this.dataPedido = new Date().toDateString();
    

    }

    adicionarLivro(livro) {
        if (Livraria.livrosDisponiveis.includes(livro)) {
            this.livros.push(livro);
            console.log("Livro adicionado com sucesso!");
        }

    }

    calcularTotal() {
        
    }
}