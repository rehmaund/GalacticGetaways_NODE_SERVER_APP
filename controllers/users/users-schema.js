import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    display_name: {type: String, required: true},
    email: String,
    phone: String,
    type: {type: String, enum: ['ALIEN', 'HUMAN', 'MODERATOR'], required: true},
    bio: {type: String},
    wants_visit: String,
    password: {type: String, required: true},
    location: {type: String, required: true},
    total_likes: Number,
    total_recs: Number,
    total_comments: {type: Number, required: true},
    actions_taken: Number,
}, {collection: 'users'});
export default schema;