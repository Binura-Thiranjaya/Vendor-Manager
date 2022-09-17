import {
    getVendorService,
    getVendorByIdService,
    saveVendorService,
    updateVendorService,
    deleteVendorService
} from '../services/index.js';
import Success from '../utils/success.js';
//import db from '../utils/dbConnect.js';

// const db = connect();

export const saveVendorController = async (req,res)=>{
    try {
        const vendor = await saveVendorService(req.body);
        res.json(Success(vendor,"Vendor saved successfully"));

    } catch (err) {
        res.status(500).json(err);
    }
};

export const getVendorsController = async (req,res)=>{
    // const sqlSelect = "SELECT * FROM vendor";
    // await db.query(sqlSelect).then((result) => {
    //     //res.status(200).json(result);
    //     res.json(Success(result,"Vendors retrieved successfully"));

    // }).catch((err) => {
    //     throw new AppError("Internal Failure", 500);
    // });
    try {
        const vendors = await getVendorService();
        //res.json(Success(vendors,"Vendors retrieved successfully"));
        res.json(vendors)
        console.log("Vendor",vendors)

    } catch (err) {
        res.status(500).json(err);
    }
};

export const getVendorByIdController = async (req,res)=>{
    try {
        const vendor = await getVendorByIdService(req.params.id);
        res.json(Success(vendor,"Vendor fetched successfully"));

    } catch (err) {
        res.status(500).json(err);
    }
};

export const updateVendorController = async (req,res)=>{
    try {
        const vendor = await updateVendorService(req.params.id,req.body);
        res.json(Success(vendor,"Vendor updated successfully"));

    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteVendorController = async (req,res)=>{
    try {
        const vendor = await deleteVendorService(req.params.id);
        res.json(Success(vendor,"Vendor deleted successfully"));

    } catch (err) {
        res.status(500).json(err);
    }
};


