import express from "express";
import vendorRouter from './vendor.route.js';

const apiRouter = express.Router();

apiRouter.use("/vendor",vendorRouter);

export default apiRouter;