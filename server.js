const express = require('express');
const app = express();
const db = require("./db");
const axios = require('axios')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


//Crear libro
app.post('/libro', async (req, res) => {    
    
    const { libro, autor, editorial, tema, paginas } = req.body;    
    const books = await db.agregarLibro(libro, autor, editorial, tema, paginas ); console.log(books)
    res.json(books);    

})

app.get('/libro/table', async (req, res) => {   
    
     const uTable = await db.getData()
    res.send(uTable);   
})

app.get('/libro/filtro', async (req, res) => {   
    
    const {libro } = req.query;
    const fTable = await db.filtrar(libro)
   res.send(fTable);   
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log("Escuchando el puerto 3000"));