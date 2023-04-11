import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
const DB_CONNECT_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/AlienTravel';

mongoose.connect(DB_CONNECT_STRING);
const app = express()
app.use(cors());
app.use(express.json());
UserController(app)
app.get('/', (req, res) => {res.send('Welcome to Our Final Project Server!')})
app.listen(process.env.PORT || 4000)
