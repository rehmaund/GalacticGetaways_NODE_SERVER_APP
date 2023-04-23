import followsModel from "./follows-model.js";

export const followUser = async (follow) => {
    await followsModel.create(follow);
}

export const unfollowUser = async (unfollow) => {
    await followsModel.deleteMany(unfollow);
}

export const followers = async (followed) => {
    return (await followsModel.find({followed: followed}).populate('follower'));

};

export const following = async (follower) => {
    return (await followsModel.find({follower: follower}).populate('followed'));
};