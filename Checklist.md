# Funcionalidades
1. adicionar livros
2. registrar clientes
3. fazer pedidos
4. calcular total dos pedidos

# Tarefas

1. adicionar livros

- [x] crie uma classe base livro que contenha propriedades comuns a todos os livros: titulo, autor, preço;
- [x] Implemente duas classes derivadas: Ebook e LivroFisico, que herdam de Livro;
- [x] A classe Ebook deve ter uma propriedade adicional Formato (por exemplo: PDF, EPUB);
- [x] A classe LivroFisico deve ter uma propriedade adicional NumeroPaginas;
- [x] Adicione um **método virtual** ExibirDetalhes na classe base Livro;
- [x] sobrescreva esse método nas classes derivadas para incluir detalhes específicos;
- [x] Crie uma classe Livraria que contenha listas para LivrosDisponiveis, Clientes e Pedidos;
- [x] Adicione métodos para AdicionarLivro, RegistrarCliente, FazerPedido e <mark>listarPedidos</mark>.
- [x] Crie uma interface ILivro que defina o contrato para as propriedades e métodos da classe Livro;
- [x] Faça com que Livro implemente a interface ILivro;
- [x] Crie uma interface ILivraria que defina o contrato para os **métodos de gerenciamento** da livraria;
- [x] Faça com que a classe Livraria implemente a interface ILivraria.

2. registrar clientes
- [x] Crie uma classe Cliente com propriedades Nome e Email;
3. fazer pedidos
- [ ] Crie uma classe Pedido que contenha um cliente, uma lista de livros, e a data do pedido;
- [ ] Adicione método AdicionarLivro ao pedido;
1. calcular total dos pedidos
- [ ] Adicione método CalcularTotal do pedido.