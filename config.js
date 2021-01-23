const mysql = require('mysql');

//MySQL details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myCompany',
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
        console.log('Database Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err));
});

module.exports = mysqlConnection;
