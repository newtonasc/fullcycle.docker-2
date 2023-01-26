const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycle_db'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

connection.connect(async(err) => {
    if (err) throw err;
      
    const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
    connection.query(createTable, function (err, result) {
        if (err) throw err;
    });

    const insertData = `INSERT INTO people(name) values('Newton')`;
    connection.query(insertData, function (err, result) {
        if (err) throw err;
    });

    const getData = 'SELECT * FROM people';
    await connection.query(getData, (err, rows) => {
        if (err) throw err;          
        setOutput(rows);
    });
});

var list = '';
var total = 0;
const setOutput = (rows) => {
    for (const person of rows) {
        list += `Name: ${person.name}. <br>`;
    }
    total = rows.length;
}

app.get('/', (req, res) => {
    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <br>
        ${list}
        <br>
        <strong>Total: ${total}</strong>
    `);
});

app.listen(port, () => {
    console.log(`running in port ${port}...`);
});