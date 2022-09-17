import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./utils/dbConnect.js";

import apiRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


 app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World !");
});


export default app;