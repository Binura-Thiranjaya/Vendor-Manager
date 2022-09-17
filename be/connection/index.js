const mysql = require('mysql2');
require("dotenv").config();

const config ={
    host: process.env.DB_HOST,
    user: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
const db = mysql.createPool(config);

module.exports = db;