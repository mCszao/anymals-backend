const connection = async () => {
    const mysql = require('mysql2/promise');
    const conex = mysql.createConnection(
        'mysql://root:root@localhost:3306/anymals'
    );
    console.log('Conectou ao banco');
    global.connection = conex;
    return conex;
};

module.exports = { connection };
