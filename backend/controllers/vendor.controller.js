import {
    getVendorService,
    getVendorByIdService,
    saveVendorService,
    updateVendorService,
    deleteVendorService
} from '../services/index.js';
import Success from '../utils/success.js';

export const saveVendorController = async (req,res)=>{
    try {
        const vendor = await saveVendorService(req.body);
        res.json(Success(vendor,"Vendor saved successfully"));

    } catch (err) {
        res.status(500).json(err);
    }
};

export const getVendorsController = async (req,res)=>{
    try {
        const vendor = await getVendorService();
        res.json(Success(vendor,"Vendors fetched successfully"));

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


