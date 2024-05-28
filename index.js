import express from 'express';
import { addLivro, buyBook, getBooks } from './dados/bookManager.js';
import { Book } from './models/Book.js';

const app = express();


app.use(express.json());

app.get('/books', (req, res) => {
    getBooks().then((books) => {
        res.json({
            sucess: true,
            books: books
        })
    }).catch((err) => {
        res.status(500).json({
            sucess: false,
            message: err.message
        })
    });
});


app.post('/books', (req, res) => {
    const {titulo, autor, genero, imagem, quantidade} = req.body;

    const newBook = new Book(titulo, autor, genero, imagem, quantidade);

    addLivro(newBook).then((newLivro) => {
        res.json({sucess: true, newBook: newLivro})
    }).catch((err) => {
        res.status(500).json({sucess: false, message: err.message})
    }) 
})


app.post('/books/buy', (req, res) => {
    const {titulo} = req.body;

    buyBook(titulo).then((book) => {
        res.json({sucess: true, buyedBook: book})
    }).catch(err => {
        res.status(500).json({sucess: false, message: err.message})
    })
});


app.listen(3000, () => {
    console.log('Aplicação iniciada na porta 3000');
});