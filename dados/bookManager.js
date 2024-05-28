import fs from "fs";
import { Book } from "../models/Book.js";

const filePath = "./dados/livros.json";

/**
 *
 * @returns {Promise<Book[]>}
 */
export const getBooks = async () => {
  const data = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(data).books;
};

/**
 * @returns {Promise<Book>}
 * @param {Book} livro
 */
export const addLivro = async (livro) => {
  const books = await getBooks();

  const lastBook = books[books.length - 1];
  livro.id = lastBook.id + 1;

  const keys = Object.keys(livro);

  keys.forEach((key) => {
    if (!livro[key]) {
      throw Error(`O campo [${key}] é obrigatorio`);
    }
  });

  keys.pop();

  keys.forEach((key) => {
    if (!livro[key]) {
      throw Error(`O campo ${key} precisa ser do tipo string`);
    }
  });

  if (typeof(livro["quantidade"]) != "number") {
    console.log(livro);
    throw Error("O campo quantidade precisa ser do tipo numerico");
  }

  const newBooks = [...books, livro];

  const data = JSON.stringify({ books: newBooks });

  await fs.promises.writeFile(filePath, data, "utf-8");

  return livro;
};

const teste = () => {
  const livro = new Book("teste", "teste", "teste", "teste", 2);

  const keys = Object.keys(livro);

  console.log(keys);
};

teste();

/**
 * @returns {Promise<Book>}
 * @param {string} titulo
 */
export const buyBook = async (titulo) => {
  const books = await getBooks();

  const buyedBook = books.find((book) => book.titulo == titulo);

  if(!buyedBook){
    throw Error("Livro não encontrado");
  }


  const newBooks = books.map((book) => {
    if (book.id === buyedBook.id) {
      if(book.quantidade === 0)
        throw Error("Sem exemplares disponiveis");

      book.quantidade--;
    }
    return book;
  });

  const data = JSON.stringify({ books: newBooks });
  await fs.promises.writeFile(filePath, data, "utf-8");

  return buyedBook;
};
