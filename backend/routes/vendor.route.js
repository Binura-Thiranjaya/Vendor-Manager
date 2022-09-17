import express from 'express'
import {
    saveVendorController,
    getVendorsController,
    getVendorByIdController,
    deleteVendorController,
    updateVendorController
} from '../controllers/index.js'

const vendorRouter = express.Router()

vendorRouter.post('/add', saveVendorController);
vendorRouter.get('/', getVendorsController);
vendorRouter.get('/:id', getVendorByIdController);
vendorRouter.delete('/delete/:id', deleteVendorController);
vendorRouter.put('/update/:id', updateVendorController);

export default vendorRouter;
