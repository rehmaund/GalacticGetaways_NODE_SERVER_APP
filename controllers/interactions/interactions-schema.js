import mongoose from 'mongoose';

const schema = mongoose.Schema({
    xid: {type: String, required: true},
    uid: {type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true},
    // uid: {type: String, required: true},
}, {collection: 'interactions'});
export default schema;