import mongoose from 'mongoose';
import flagsSchema from './flags-schema.js'
const flagsModel = mongoose
.model('flagsModel', flagsSchema);
export default flagsModel;