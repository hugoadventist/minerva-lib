import ILivro from "./interfaces/ILivro.js";

export class Livro extends ILivro{
    constructor(titulo, autor, preco){
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
        return `Autor: ${this.autor}
            \rTítulo: ${this.titulo},
            \rPreço: R$ ${this.preco}\n`;
    }

}

export class Ebook extends Livro {
    constructor(titulo, autor, preco, formato) {
        super(titulo,autor, preco);
        this._formato = formato;

    }

// refatorar esta função para o format de SET
    setFormato() {
        const FORMATOS = ['EPUB', 'PDF'];
        if (this.formato == FORMATOS.find(this.formato)) {
            return this._formato;
        } else {
            console.log("Opção de formato inválida, favor escolher a opção correta!");

        }
        }
    
    exibirDetalhes () {
        return `${super.exibirDetalhes()}
        \r Formato: ${this._formato}`;
    }
    

}

export class LivroFisico extends Livro {
    constructor(titulo, autor, preco, numeroPaginas) {
        super(titulo,autor, preco);
        this._numeroPaginas = numeroPaginas;

        
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}
        \rNúmero de páginas: ${this._numeroPaginas}`
    }
}

