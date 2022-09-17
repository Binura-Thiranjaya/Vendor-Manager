import AppError from '../utils/appError.js'; 
import db from '../utils/dbConnect.js';

export const saveVendor = async (vendor) => {
    const sqlInsert = "INSERT INTO vendor (name, address, number, email, products) VALUES (?,?,?,?,?)";
    const { name, address, number, email, products } = vendor;
    const result = await db.query(sqlInsert, [name, address, number, email, products]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const getVendorById = async (id) => {
    const sqlSelect = "SELECT * FROM vendor WHERE id = ?";
    const res = await db.query(sqlSelect, [id])
    return Promise.resolve(res[0]).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const getVendors = async () => {
    const sqlSelect = "SELECT * FROM vendor";
    const res=await db.query(sqlSelect);
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const updateVendor = async (id,vendor) => {
    const sqlUpdate = "UPDATE vendor SET name = ?, address = ?, number = ?, email = ?, products = ? WHERE id = ?";
    const { name, address, number, email, products } = vendor;
    const result = await db.query(sqlUpdate, [name, address, number, email, products, id]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
export const deleteVendor = async (id) => {
    const sqlDelete = "DELETE FROM vendor WHERE id = ?";
    const res = await db.query(sqlDelete, [id])
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

