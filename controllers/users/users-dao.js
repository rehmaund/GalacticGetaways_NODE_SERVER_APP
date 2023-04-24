import usersModel from './users-model.js';
import countersModel from "../counters/counters-model.js";
export const findUsers = () => usersModel.find();

export const findByUsername = async (username) => {
    try {
        const user = await usersModel.findOne({username: username});
        return user;
    } catch (error) {
        console.error(error);
    }
}

export const findByID = async (uid) => {
    try {
        const user = await usersModel.findOne({_id: uid});
        return user;
    } catch (error) {
        console.error(error);
    }
}
export const createUser = (user) => {
    return usersModel.create(user).then(createdUser => {
        return createdUser;
    });
};

export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = async (uid, user) => {
    try {
        console.log(user);
        const updatedUser = await usersModel.updateOne({_id: uid}, {$set: user});
        return updatedUser;
    } catch (error) {
        console.error(error);
    }
}

export const incrementLikes = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_likes: 1}})

export const incrementRecommendations = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_recs: 1}})

export const incrementComments = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_comments: 1}})

export const incrementActions = (uid) => usersModel.updateOne({_id: uid}, {$inc: {actions_taken: 1}})

export const decrementLikes = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_likes: -1}})

export const decrementRecommendations = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_recs: -1}})

export const decrementComments = (uid) => usersModel.updateOne({_id: uid}, {$inc: {total_comments: -1}})

export const decrementActions = (uid) => usersModel.updateOne({_id: uid}, {$inc: {actions_taken: -1}})

export const findUserByCredentials = (username, password) => usersModel.findOne({ username: username, password: password})
