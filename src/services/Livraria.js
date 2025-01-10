import Cliente from "../models/repositories/Cliente.js";
import ILivraria from "../models/repositories/interfaces/ILivraria.js";
import { Livro } from "../models/repositories/Livro.js";
import Pedido from "../models/repositories/Pedido.js";
import functionUtils from "../utils/functionUtils.js";

const utils = new functionUtils();

export default class Livraria extends ILivraria {
    constructor() {
        super();
        this.livrosDisponiveis = [];
        this.clientes = [];
        this.pedidos = [];
    }

    adicionarLivro(livro) {
        this.livrosDisponiveis.push(livro);
        console.log(`Livro: ${livro._titulo} adicionado à livraria.`);

    }

    registrarCliente(cliente) {
        this.clientes.push(cliente);
        console.log(`Cliente: ${cliente.getNome()} registrado com sucesso!`);

    }

    fazerPedido(cliente, livros) {
        const novoPedido = new Pedido(cliente);
        for (const livro of livros) {
            if (this.livrosDisponiveis.includes(livro)) {
                novoPedido.adicionarLivro(livro);
            } else {
                throw new Error(`Livro: ${livro._titulo} não está disponível`)
            }
        }
        this.pedidos.push(novoPedido);
        console.log(`Pedido realizado para o cliente: ${cliente._nome}`)
        return novoPedido;

    }


    getClientes() {
        return this.clientes;
    }

    getLivrosDisponiveis() {
        return this.livrosDisponiveis;

    }

    getPedidos() {
        return this.pedidos;
    }


}