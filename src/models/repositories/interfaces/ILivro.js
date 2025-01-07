// models/ILivro.js
export default class ILivro {
    constructor(titulo, autor, preco) {
        if (this.constructor === ILivro) {
            throw new Error("ILivro é uma interface e não pode ser instanciada diretamente.");
        }
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    exibirDetalhes() {
        throw new Error("Método 'exibirDetalhes()' deve ser implementado.");
    }
}

