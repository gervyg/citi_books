const { Pool } = require("pg");
const { query } = require('express');


//conexión a base de datos PostgreSQL.

const config = {
    user: "postgres",
    host: "localhost",
    password: "0718",
    database: "citi_talent",
    port: 5432,
    max: 20,
   
};

const pool = new Pool(config);

const agregarLibro = async (libro, autor, editorial, tema, paginas) => {

    const inserta = `INSERT INTO libro (libro, autor, editorial, tema, paginas) VALUES ('${libro}', '${autor}' , '${editorial}', '${tema}', '${paginas}' );`;
    const objeto = { mensaje: "" }
    try {
        const result = await pool.query(inserta);
        objeto.mensaje = "The book "+libro+" Was successfully addeed to the data base."
        return objeto;
    } catch (error_inserta) {
        console.log('Error inserción');
        objeto.mensaje = "Error al agregar libro"
        return objeto;
    }
};

const getData = async () => {

    const consulta = `(SELECT libro, autor, editorial, tema, paginas FROM libro );`;

    try {
        const result = await pool.query(consulta);
        return result.rows;
    } catch (error_consulta) {
        console.log('Error en consulta');
        return error_consulta;
    }
};

const filtrar = async (libro) => {

    const consulta = `(SELECT * FROM libro WHERE libro like '%${libro}%' );`;

    try {
        const result = await pool.query(consulta);
        return result.rows;
    } catch (error_consulta) {
        console.log('Error en consulta');
        return error_consulta;
    }
};




module.exports = { agregarLibro, getData, filtrar}