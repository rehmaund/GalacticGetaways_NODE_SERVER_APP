import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,
    ref: 'usersModel',
    required: true},
  username: {type: String, required: true},
  comment: {type: mongoose.Schema.Types.ObjectId,
    ref: 'commentsModel',
    // refPath: ('item_type') + 'sModel',
    required: true},
}, {collection: 'flags'});
export default schema;

