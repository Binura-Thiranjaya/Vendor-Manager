const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
require("dotenv").config();


const config ={
    host: process.env.DB_HOST,
    user: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
const db = mysql.createPool(config);
console.log("Hi",process.env.DB_NAME);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Insert a new vendor
app.post('/api/insert', (req, res) => {
    const {name, address, number, email, products} = req.body;
    const sqlInsert = "INSERT INTO vendor (name, address, number, email, products) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, address, number, email, products], (err, result) => {
        console.log(result);
    });
});
//Get all vendors
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM `vendor`";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
        console.log(err);
    });
});
//Delete a vendor
app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM vendor WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
});
//Update a vendor
app.put('/api/update/:id', (req, res) => {
    const id = req.params.id;
    const {name, address, number, email, products} = req.body;
    const sqlUpdate = "UPDATE vendor SET name = ?, address = ?, number = ?, email = ?, products = ? WHERE id = ?";
    db.query(sqlUpdate, [name, address, number, email, products, id], (err, result) => {
        if (err) {console.log(err);
    }
    res.send(result);
    });
});
app.get('/api/get/:id', (req, res) => {
    const id = req.params.id; 
    const sqlSelect = "SELECT * FROM vendor WHERE id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
        console.log(result);
        console.log(err);
    });
});


app.listen(8080, () => {
    console.log('Server started on port 8080');
    });
 
