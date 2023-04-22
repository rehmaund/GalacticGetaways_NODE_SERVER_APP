import flagsModel from './flags-model.js';

export const getAllFlags = () => flagsModel.find().populate('comment');

export const getFlagByBothIds = (user, item) => flagsModel.find({user: user, item: item});

export const createFlag = (flag) => flagsModel.create(flag);

export const deleteFlag = (fid) => flagsModel.deleteOne({_id: fid});