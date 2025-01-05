import inquirer from "inquirer";

export function main() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Registrar Livro',
                'Buscar Livro',
                'Registrar Cliente',
                'Buscar Cliente',
                'Buscar Pedido',
                'Realizar Pedido',
                'Sair',
            ],
        },
    ])
    .then((answer) => {
        try {
            const action = answer['action']
    
            const choiceToSelect = {
                'Registrar Livro': registrarLivro(),
                'Buscar Livro': buscarLivro(),
                'Registrar Cliente': registrarCliente(),
                'Buscar Cliente': buscarCliente(),
                'Buscar Pedido': buscarPedido(),
                'Realizar Pedido': realizarPedido(),
                'Sair': process.exit(1),
            }

            choiceToSelect[action];
        } catch (error) {
            console.error(error);
        }


    })
}