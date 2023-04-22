import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";
import CommentsController from "./controllers/comments/comments-controller.js";
import SessionController from "./session-controller.js";
import mongoose from "mongoose";
const DB_CONNECT_STRING = 'mongodb+srv://webdevproj:aliens@finalproj.uixtdol.mongodb.net/AlienTravel?retryWrites=true&w=majority';

mongoose.connect(DB_CONNECT_STRING);

import session from "express-session";
import FollowsController from "./controllers/follows/follows-controller.js";
import CountersController from "./controllers/counters/counters-controller.js";
import InteractionsController
  from "./controllers/interactions/interactions-controller.js";
import FlagsController from "./controllers/flags/flags-controller.js";
const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
        unset: "destroy",
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
SessionController(app);
CommentsController(app);
FollowsController(app);
CountersController(app);
InteractionsController(app);
FlagsController(app);

app.listen(4000);

