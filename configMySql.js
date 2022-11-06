const mysql = require('mysql');

const config = {
    host : 'localhost',
    user : 'greenlove',
    database: 'greenlovebackend',
    password: 'greenlove',
};

const conexion = mysql.createConnection(config);

conexion.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conexion;