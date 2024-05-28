import fs from 'fs';

// Usage example
const filePath = './dados/livros.json';


export const getBooks = async () => {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data).books;
}

export const addLivro = async (livro) => {
    const books = await getBooks();

    const newBooks = [...books, livro];

    const data = JSON.stringify({ books: newBooks });

    await fs.promises.writeFile(filePath, data, 'utf-8');
}

export const comprarLivro = async (livro) => {
    const books = await getBooks();

    const newBooks = books.map((book) => {
        if (book.id === livro.id) {
            book.estoque -= 1;
        }
        return book;
    });

    const data = JSON.stringify({ books: newBooks });
    await fs.promises.writeFile(filePath, data, 'utf-8');
}






