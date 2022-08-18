import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Routes from "./routers/route.js";
import Connection from "./database/db.js";

const app = express();

const PORT = 8000;

dotenv.config();
app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);
app.use(cors());
app.use("/", Routes);

app.listen(PORT, () => console.log("success"));
