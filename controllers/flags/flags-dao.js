import flagsModel from './flags-model.js';

export const getAllFlags = () => flagsModel.find().populate('comment');

export const getFlagByBothIds = (user, comment) => flagsModel.find({user: user, comment: comment});

export const createFlag = (flag) => flagsModel.create(flag);

export const deleteFlag = (fid) => flagsModel.deleteOne({_id: fid});