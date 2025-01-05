CREATE TABLE
    IF NOT EXISTS 'livros' (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        autor TEXT NOT NULL,
        preco REAL
    );

CREATE TABLE
    IF NOT EXISTS 'clientes' (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS 'pedidos' (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cliente INTEGER,
        FOREIGN KEY (id_cliente) REFERENCES clientes (id),
        id_livro INTEGER,
        FOREIGN KEY (id_livro) REFERENCES livros (id),
        quantidade INTEGER
    )