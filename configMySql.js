const mysql = require('mysql');
require('dotenv').config()

const config = {
    host : process.env.HOST,
    user : process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
};

const conexion = mysql.createConnection(config);

conexion.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conexion;