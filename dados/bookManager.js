import fs from 'fs';
import { Book } from '../models/Book.js';


const filePath = './dados/livros.json';

/**
 * 
 * @returns {Promise<Book[]>}
 */
export const getBooks = async () => {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data).books;
}


/**
 * 
 * @param {Book} livro 
 */
export const addLivro = async (livro) => {
    const books = await getBooks();

    const lastBook = books[books.length - 1];
    livro.id = lastBook.id + 1;

    const newBooks = [...books, livro];

    const data = JSON.stringify({ books: newBooks });

    await fs.promises.writeFile(filePath, data, 'utf-8');
}

/**
 * 
 * @param {Book} livro 
 */
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






