const router = require('express').Router();
const express = require('express');
const app = express();
const db = require('../connection/index.js');

if (db) {
    console.log("Done");
}else{
    console.log("Fail")
}
//Get all vendors
router.route('/').get((req, res) => {
    const sqlSelect = "SELECT * FROM vendor";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//Get vendor by id
router.route('/:id').get((req, res) => {
    const sqlSelect = "SELECT * FROM vendor WHERE id = ?";
    db.query(sqlSelect, req.params.id, (err, result) => {
        res.send(result);
        if(err){
            
        }
    });
});

//Add vendor
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.number;
    const email = req.body.email;
    const product = req.body.products;
    const sqlInsert = "INSERT INTO vendor (name, address, number, email, products) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, address, phone, email, product], (err, result) => {
        console.log(result);
        console.log(err);
        res.send(result);
    });
});
//Update vendor
router.route('/update/:id').put((req, res) => {
    const vendor_id = req.params.id;
    const vendor_name = req.body.name;
    const vendor_address = req.body.address;
    const vendor_phone = req.body.number;
    const vendor_email = req.body.email;
    const vendor_products = req.body.products;

    const sqlUpdate = "UPDATE vendor SET name = ?, address = ?, number = ?, email = ?, products = ? WHERE id = ?";
    db.query(sqlUpdate, [vendor_name, vendor_address, vendor_phone, vendor_email, vendor_products, vendor_id], (err, result) => {
        console.log("Update",result);
        res.send(result);
    });
});

//Delete vendor
router.route('/delete/:id').delete((req, res) => {
    const sqlDelete = "DELETE FROM vendor WHERE id = ?";
    db.query(sqlDelete, req.params.id, (err, result) => {
        console.log("Delete",result);
        res.send(result);
    });
});

module.exports = router;