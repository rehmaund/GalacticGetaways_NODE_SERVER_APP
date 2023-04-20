import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";
import CommentsController from "./controllers/comments/comments-controller.js";
import mongoose from "mongoose";
const DB_CONNECT_STRING = 'mongodb+srv://webdevproj:aliens@finalproj.uixtdol.mongodb.net/AlienTravel?retryWrites=true&w=majority';

mongoose.connect(DB_CONNECT_STRING);
const app = express()
app.use(cors());
app.use(express.json());
UserController(app)
CommentsController(app)
app.get('/', (req, res) => {res.send('Welcome to Our Final Project Server!')})
app.listen(4000)
