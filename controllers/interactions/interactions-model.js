import mongoose from 'mongoose';
import interactionsSchema from './interactions-schema.js'
const interactionsModel = mongoose
    .model('interactionsModel', interactionsSchema);
export default interactionsModel;
