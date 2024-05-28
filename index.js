import express from 'express';

const app = express();


app.use(express.json());

app.get('/books', (req, res) => {
    
});


app.post('/books', (req, res) => {
    
})

app.post('/books/comprar', (req, res) => {

});


app.listen(3000, () => {
    console.log('Aplicação iniciada na porta 3000');
});