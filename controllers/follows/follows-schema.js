import mongoose from "mongoose";
const followsSchema = mongoose.Schema({
    follower: {type: mongoose.Schema.Types.ObjectId, ref: "usersModel", required: true},
    followed: { type: mongoose.Schema.Types.ObjectId, ref: "usersModel", required: true},
}, {collection: "follows"});

export default followsSchema;
