import ILivro from "./interfaces/ILivro.js";

export class Livro extends ILivro{
    constructor(titulo, autor, preco){
        super(titulo, autor, preco);
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
        this.formato = formato;

    }


    verificarFormato() {
        const FORMATOS = ['EPUB', 'PDF'];
        if (this.formato == FORMATOS.find(this.formato)) {
            return this.formato;
        } else {
            console.log("Opção de formato inválida, favor escolher a opção correta!");

        }
        }
    
    exibirDetalhes () {
        return `${super.exibirDetalhes()}
        \r Formato: ${this.formato}`;
    }
    

}

export class LivroFisico extends Livro {
    constructor(titulo, autor, preco, numeroPaginas) {
        super(titulo,autor, preco);
        this.numeroPaginas = numeroPaginas;

        
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}
        \rNúmero de páginas: ${this.numeroPaginas}`
    }
}

