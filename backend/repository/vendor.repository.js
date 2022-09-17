import AppError from '../utils/appError.js'; 
import {connect} from '../utils/dbConnect.js';

const db = connect();

if (db) {
    console.log("Done");
}else{
    console.log("Fail");
}

export const saveVendor = async (vendor) => {
    const sqlInsert = "INSERT INTO vendor (name, address, number, email, products) VALUES (?,?,?,?,?)";
    await db.query(sqlInsert, [vendor.name, vendor.address, vendor.number, vendor.email, vendor.products]).then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const getVendorById = async (id) => {
    const sqlSelect = "SELECT * FROM vendor WHERE id = ?";
    await db.query(sqlSelect, id).then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const getVendors = async () => {
    const sqlSelect = "SELECT * FROM vendor";
    await db.query(sqlSelect).then((result) => {
        console.log(result);
        return Promise.resolve(result);

    }).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
    
}   

export const updateVendor = async (vendor) => {
    const sqlUpdate = "UPDATE vendor SET name = ?, address = ?, number = ?, email = ?, products = ? WHERE id = ?";
    await db.query(sqlUpdate, [vendor.name, vendor.address, vendor.number, vendor.email, vendor.products, vendor.id]).then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const deleteVendor = async (id) => {
    const sqlDelete = "DELETE FROM vendor WHERE id = ?";
    await db.query(sqlDelete, id).then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

