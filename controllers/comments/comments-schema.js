import mongoose from 'mongoose';
import users from "../users/users.js";
const schema = mongoose.Schema({
    text: {type: String, required: true},
    uid: {type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true},
    // uid: {type: String, required: true},
    username: {type: String, required: true},
    display_name: {type: String, required: true},
    type: {type: String, required: true},
    xid: {type: String, required: true},
    name: {type: String, required: true},
}, {collection: 'comments'});
export default schema;
