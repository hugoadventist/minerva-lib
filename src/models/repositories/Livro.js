import ILivro from "./interfaces/ILivro.js";
import Utils from "../../utils/functionUtils.js";

const utils = new Utils();

export class Livro extends ILivro {
    constructor(titulo, autor, preco) {
        super(titulo, autor, preco);
    }

    getLivro() {
        return this._titulo;
    }

    getAutor() {
        return this._autor;
    }

    getPreco() {
        return this._preco;
    }

    exibirDetalhes() {
        return `Autor: ${this.getAutor()}
            \rTítulo: ${this.getLivro()},
            \rPreço: R$ ${this.getPreco()}`;
    }

}

export class Ebook extends Livro {
    constructor(titulo, autor, preco, formato) {
        super(titulo, autor, preco);
        this._formato = utils.verificarFormato(formato);

    }

    // refatorar esta função para o formato de SET
    getFormat() {
        return this._formato;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}
        \rFormato: ${this._formato}`;
    }


}

export class LivroFisico extends Livro {
    constructor(titulo, autor, preco, numeroPaginas) {
        super(titulo, autor, preco);
        this._numeroPaginas = numeroPaginas;


    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}
        \rNúmero de páginas: ${this._numeroPaginas}`
    }
}

