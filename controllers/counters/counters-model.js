import mongoose from 'mongoose';
import countersSchema from './counters-schema.js'
const countersModel = mongoose
    .model('countersModel', countersSchema);
export default countersModel;