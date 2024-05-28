import express from 'express';
import { getBooks } from './dados/bookManager.js';

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
})


app.post('/books/comprar', (req, res) => {

});


app.listen(3000, () => {
    console.log('Aplicação iniciada na porta 3000');
});