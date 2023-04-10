import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";
const app = express()
app.use(cors());
app.use(express.json());
UserController(app)
app.get('/', (req, res) => {res.send('Welcome to Our Final Project Server!')})
app.listen(4000)