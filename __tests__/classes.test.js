import { Ebook, LivroFisico } from '../src/models/repositories/Livro.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('exibirDetalhes', () => {
    it('deve retornar caracteres na estrutura Autor, Título, Preço, Número de páginas', () => {
        const livro = new LivroFisico('A volta', 'Lee', 5, '100');
        assert.equal(livro.exibirDetalhes(), `Autor: Lee\n            \rTítulo: A volta\n            \rPreço: R$ 5.00\n        \rNúmero de páginas: 100\n`);

    });
    it('deve retornar caracteres na estrutura Autor, Título, Preço, Número de páginas, formato', () => {
        const ebook = new Ebook('Duna', 'Frank Herbert', 99.99,);
        ebook.formato = 'PDF';
        assert.equal(ebook.exibirDetalhes(), `Autor: Frank Herbert\n            \rTítulo: Duna\n            \rPreço: R$ 99.99\n        \rFormato: PDF`)
    })
});
