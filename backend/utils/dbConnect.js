//import mysql from 'mysql2';
import mysql from'mysql2/promise';


export const connect = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_PORT,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
};
