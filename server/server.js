import express from "express";
import dotenv from 'dotenv';
import { Connection } from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./route/route.js";


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router )
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=> console.log(`Server is running successfully on PORT ${PORT}`));