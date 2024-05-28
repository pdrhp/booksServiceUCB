export class Book {

    /**
     * 
     * @param {string} titulo 
     * @param {string} autor 
     * @param {string} genero 
     * @param {string} imagem 
     * @param {string} quantidade 
     */

    constructor(titulo, autor, genero, imagem, quantidade) {
        this.id = 0;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.imagem = imagem;
        this.quantidade = quantidade;
    }



}