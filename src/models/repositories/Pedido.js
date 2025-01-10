import Utils from "../../utils/functionUtils.js";

const utils = new Utils();

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

    calcularTotal() {
        const precos = this._livros.map(obj => obj._preco);
        return utils.arredondar(precos.reduce((acumulador, valorAtual) => acumulador + valorAtual,));

    }
}
