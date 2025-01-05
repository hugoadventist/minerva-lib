import readline from 'node:readline';
import Livraria from './src/models/repositories/Livraria.js';
import Pedido from './src/models/repositories/Pedido.js';
import ILivro from './src/models/repositories/interfaces/ILivro.js';
import { Ebook, Livro } from './src/models/repositories/Livro.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tentar(){

    console.log(`Minerva Books: \n\n Boas vindas!!! \n\n
        Escolha uma opção abaixo para prosseguirmos: \n\n
        \t1 - Registrar Livro
        \t2 - Buscar Livro
        \t3 - Registrar Cliente
        \t4 - Buscar Cliente
        \t5 - Realizar Pedido
        \t6 - Buscar Pedido
        \t7 - Para sair.`);
        rl.on('line', (input) => {
            const entrada = input.trim(); // Remover espaços em branco extras
            const arrayOpcoes = {
            }
        });

}

function main() {
    const novaLivraria = new Livraria();
    console.log(novaLivraria.adicionarLivro('O mulo'));
    console.log(novaLivraria.registrarCliente('Seu zé'));
    novaLivraria.fazerPedido('1 livro desse');
    const novoPedido = new Pedido();
    novoPedido.adicionarLivro('esse outro');
    novoPedido.calcularTotal();

    const novoLivro = new Ebook('hoje','eu', 1,'ebook');
    console.log(`saída do novoLivro \n \r${novoLivro.exibirDetalhes()}`);

    console.log('\nLivros disponíveis\n');

    console.log(novaLivraria.livrosDisponiveis);


    console.log('Programa executado com sucesso!!')

    console.log('Saindo...')
    setTimeout(() => {process.exit(1)}, 5000);
}

main();