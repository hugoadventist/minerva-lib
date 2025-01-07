import Cliente from "./Cliente.js";
import ILivraria from "./interfaces/ILivraria.js";
import { Livro } from "./Livro.js";
import Pedido from "./Pedido.js";

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
        console.log(`Livro: ${novoLivro.titulo} adicionado à livraria.`);

    }

    registrarCliente(nome, email) {
        const novoCliente = new Cliente(nome, email);
        this.clientes.push(novoCliente);
        console.log(`Cliente ${novoCliente.nome} registrado com sucesso!`);

    }

    fazerPedido(cliente, livros) {
        const novoPedido = new Pedido(cliente);
        for (let livro in livros) {
            if (this.livrosDisponiveis.includes(livro)) {
                novoPedido.adicionarLivro(livro);
            } else {
                throw new Error("Opção de livro inválida!");
            }
        }
        this.pedidos.push(novoPedido);

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