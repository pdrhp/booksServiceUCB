# Nome do Projeto

## Descrição

Books API

## Instalação

1. Clone o repositório: `git clone https://github.com/pdrhp/booksServiceUCB.git`
2. Instale as dependências: `npm install`


## Uso

1. Inicie o servidor: `npm start`
2. Acesse a API em: `http://localhost:3000`

## Rotas

### GET /books

Descrição: Retorna todos os livros.

### POST /books

Descrição: Cria um novo recurso.

Parâmetros:
- `titulo`: Titulo do livro.
- `autor`: Autor do livro.
- `genero`: Genero do livro.
- `imagem`: imagem de capa do livro.
- `quantidade`: Quantidade de exemplares do livro.

```json
{
    "titulo": "teste",
    "autor": "teste",
    "genero": "teste",
    "imagem": "teste",
    "quantidade": 1
}
```

### POST /books/buy

Descrição: compra um livro

Parâmetros:
- `titulo`: Titulo do livro a ser buscado.
```json
{
    "titulo": "teste",
}
```

