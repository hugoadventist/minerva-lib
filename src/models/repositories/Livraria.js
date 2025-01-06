import Cliente from "./Cliente.js";
import ILivraria from "./interfaces/ILivraria.js";
import { Livro } from "./Livro.js";
import Pedido from "./Pedido.js";

export default class Livraria extends ILivraria {
    constructor() {
        super();
        this._livrosDisponiveis = [];
        this._clientes = [];
        this._pedidos = [];
    }

    adicionarLivro(titulo, autor, preco) {
        const novoLivro = new Livro(titulo, autor, preco);
        this._livrosDisponiveis.push(novoLivro);

    }

    registrarCliente(nome, email) {
        const novoCliente = new Cliente(nome, email);
        this._clientes.push(novoCliente);

    }

    fazerPedido(nome, livros) {
        const novoPedido = new Pedido(nome, livros);
        this._pedidos.push(novoPedido);

    }
    listarClientes() {
        return this._clientes;
    }
}