import express from 'express'
import {
    saveVendorController,
    getVendorsController,
    getVendorByIdController,
    deleteVendorController,
    updateVendorController
} from '../controllers/index.js'

const vendorRouter = express.Router()

vendorRouter.post('/', saveVendorController);
vendorRouter.get('/', getVendorsController);
vendorRouter.get('/:id', getVendorByIdController);
vendorRouter.delete('/:id', deleteVendorController);
vendorRouter.put('/:id', updateVendorController);

export default vendorRouter;
