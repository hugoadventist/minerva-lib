import ILivraria from "./interfaces/ILivraria.js";

export default class Livraria extends ILivraria {
    constructor() {
        super();
        this.livrosDisponiveis = [];
        this.clientes = [];
        this.pedidos = [];
    }

    adicionarLivro(novoLivro) {
        this.livrosDisponiveis.push(novoLivro);

    }

    registrarCliente() {

    }

    fazerPedido() {

    }
}