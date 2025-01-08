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

    adicionarLivro(titulo, autor, preco) {
        const novoLivro = new Livro(titulo, autor, preco);
        this.livrosDisponiveis.push(novoLivro);
        console.log(`Livro: ${novoLivro._titulo} adicionado à livraria.`);

    }

    registrarCliente(nome, email) {
        const novoCliente = new Cliente(nome, email);
        this.clientes.push(novoCliente);
        console.log(`Cliente: ${novoCliente._nome} registrado com sucesso!`);

    }

    fazerPedido(cliente, livros) {
        const novoPedido = new Pedido(cliente, livros);
            novoPedido.adicionarLivro(livros);
            this.pedidos.push(novoPedido);
            console.log('...');
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

    *getTituloLivro() {
        const livrosDisponiveis = this.livrosDisponiveis;
        for (let livro in livrosDisponiveis) {
            yield livrosDisponiveis[livro]["_titulo"];

        }

    }
}