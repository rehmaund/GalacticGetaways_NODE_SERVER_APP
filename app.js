import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
import AuthController from "./controllers/users/user-auth/auth-controller.js";
const DB_CONNECT_STRING = process.env.DB_CONNECT_STRING || 'mongodb://localhost:27017/AlienTravel';

mongoose.connect(DB_CONNECT_STRING);

import session from "express-session";
const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
UserController(app);
AuthController(app);
const port = process.env.PORT || 4000;
app.listen(port);