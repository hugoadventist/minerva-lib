import readline from 'node:readline';
import Livraria from './src/services/Livraria.js';
import { Ebook, LivroFisico } from './src/models/repositories/Livro.js';
import Cliente from './src/models/repositories/Cliente.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registrarLivro() {

    rl.question("Qual o nome do livro?", (titulo) => {
        console.log(`Você digitou o título do livro: ${titulo}`)
    })
    console.log("função registrarLivro() acionada.");
}

function tentar() {

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
            1: registrarLivro(),
        }
        return arrayOpcoes[entrada];
    });

}

function main() {
    const novaLivraria = new Livraria();

    const novoEbook = new Ebook("Eu, robô", "Isaac Asimov", 99.9, "WORD");
    const novoLivroFisico = new LivroFisico("Sertões", "Graciliano Ramos", 20.90, "100");

    // Adicionando livros à livraria

    novaLivraria.adicionarLivro(novoEbook);
    novaLivraria.adicionarLivro(novoLivroFisico);
    console.log(novaLivraria.getLivrosDisponiveis());


    const novoCliente = new Cliente("Marina da Silva", "malina@hotmail.com");

    novaLivraria.registrarCliente(novoCliente);

    try {
        const novoPedido = novaLivraria.fazerPedido(novoCliente, [novoEbook, novoLivroFisico]);
        for (const livro of novoPedido._livros) {
            console.log(livro.exibirDetalhes());
        }
        console.log(`O valor total do pedido é: R$ ${novoPedido.calcularTotal()}`)
    } catch (error) {
        throw new Error(`Erro ao fazer o pedido: ${error}`)
    }




    //console.log(novaLivraria.fazerPedido('seu zé', 'a volta dos que não foram', 'as tranças de um careaca'));
    /*const titulosLivros = novaLivraria.getTituloLivro();
    console.log(titulosLivros.next());
    console.log(titulosLivros.next());


/*    novoPedido.calcularTotal();
    console.log(novoPedido.cliente);

    const novoLivro = new Ebook('hoje','eu', 1,'ebook');
    console.log(`saída do novoLivro \n \r${ novoLivro.exibirDetalhes() } `);

    console.log('\nLivros disponíveis\n');

    console.log(novaLivraria.livrosDisponiveis);
*/

    console.log('Programa executado com sucesso!!')

    console.log('Saindo...')
    setTimeout(() => { process.exit(1) }, 5000);
}

main();