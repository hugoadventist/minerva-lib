import LivroFisico from './src/models/repositories/classes';
const test = require('node:test');


test('deve retornar throw new Error [mensagem de erro]', () => {
    const livro = new LivroFisico('A volta', 'Lee', 5, '100');
    expect(LivroFisico.exibirDetalhes()).toBe('Método exibirDetalhes() deve ser implementado.');
});