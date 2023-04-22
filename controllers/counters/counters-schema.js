import mongoose from 'mongoose';

const schema = mongoose.Schema({
    xid: {type: String, required: true},
    num_likes: {type: Number, required: true},
    num_recommendations: {type: Number, required: true},
}, {collection: 'counters'});
export default schema;

