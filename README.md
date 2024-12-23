# Desafio de Programação Orientada a Objetos

## 1. Descrição:

Você foi contratado para desenvolver um sistema básico de gerenciamento de livraria que inclui livros digitais e físicos. Sua tarefa é implementar funcionalidades para adicionar livros, registrar clientes, fazer pedidos e calcular o total dos pedidos. O sistema deve ser capaz de lidar com diferentes tipos de livros (eBooks e livros físicos), utilizando conceitos de herança e polimorfismo.

## 2. Requisitos:

### 2.1 Classes Base e Derivadas:

Crie uma classe base Livro que contenha propriedades comuns a todos os livros: Titulo, Autor, Preco.
Implemente duas classes derivadas: Ebook e LivroFisico, que herdam de Livro.
A classe Ebook deve ter uma propriedade adicional Formato (por exemplo: PDF, EPUB).
A classe LivroFisico deve ter uma propriedade adicional NumeroPaginas.

### 2.2 Exibir Detalhes:

Adicione um método virtual ExibirDetalhes na classe base Livro e sobrescreva esse método nas classes derivadas para incluir detalhes específicos.

### 2.3 Gerenciamento de Livros:

Crie uma classe Livraria que contenha listas para LivrosDisponiveis, Clientes e Pedidos.
Adicione métodos para AdicionarLivro, RegistrarCliente e FazerPedido.

### 2.4 Classe Cliente:

Crie uma classe Cliente com propriedades Nome e Email.

### 2.5 Classe Pedido:

Crie uma classe Pedido que contenha um cliente, uma lista de livros, e a data do pedido.
Adicione métodos para AdicionarLivro ao pedido e CalcularTotal do pedido.

### 2.6 Implementar Interfaces:

Crie uma interface ILivro que defina o contrato para as propriedades e métodos da classe Livro.
Faça com que Livro implemente a interface ILivro.
Crie uma interface ILivraria que defina o contrato para os métodos de gerenciamento da livraria.
Faça com que a classe Livraria implemente a interface ILivraria.

## 3. Teste no Método Main:

Instancie a classe Livraria.
Adicione alguns livros (Ebook e LivroFisico) à livraria.
Registre um cliente e faça um pedido, adicionando livros ao pedido.
Calcule e exiba o total do pedido e os detalhes dos livros no pedido.