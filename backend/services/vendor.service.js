import {
    saveVendor,
    getVendors,
    getVendorById,
    updateVendor,
    deleteVendor,
} from '../repository/index.js';
import AppError from '../utils/appError.js';

export const saveVendorService = async (data) => {
    const { name, address, number, email, products } = data;
    try {
        const vendor = await saveVendor({
            name,
            address,
            number,
            email,
            products,
        });
        return Promise.resolve(vendor);
    }catch(err){
        return new AppError(err.message,err.status);
    }
};

export const getVendorService = async () => {
    try {
        const vendor = await getVendors();
        return Promise.resolve(vendor);
    }catch(err){
        return new AppError(err.message,err.status);
    }
}

export const getVendorByIdService = async (id) => {
    try {
        const vendor = await getVendorById(id);
        return Promise.resolve(vendor);
    }catch(err){
        return new AppError(err.message,err.status);
    }
}

export const updateVendorService = async (id, data) => {
    const { name, address, number, email, products } = data;
    try {
        const vendor = await updateVendor(id, {
            name,
            address,
            number,
            email,
            products,
        });
        return Promise.resolve(vendor);
    }catch(err){
        return new AppError(err.message,err.status);
    }
}

export const deleteVendorService = async (id) => {
    try {
        const vendor = await deleteVendor(id);
        return Promise.resolve(vendor);
    }catch(err){
        return new AppError(err.message,err.status);
    }
}
