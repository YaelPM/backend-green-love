const mysql = require('mysql');

const config = {
    host : '44.212.29.242',
    user : 'root',
    database: 'greenlovebackend',
    password: 'root',
};

const conexion = mysql.createConnection(config);

conexion.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conexion;