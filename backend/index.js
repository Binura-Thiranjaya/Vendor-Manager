const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =require('cors');
const db = require('./connection/index');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const vendorRouter = require('./route/vendor');
app.use('/vendor', vendorRouter);

app.listen(8080, () => {
    console.log('Server started on port 8080');
    });
 
