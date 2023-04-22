import followsModel from "./follows-model.js";

export const followUser = async (follow) => {
    await followsModel.create(follow);
}

export const unfollowUser = async (unfollow) => {
    await followsModel.deleteMany(unfollow);
}

export const followers = async (followed) => {
    console.log("in dao, followed:");
    console.log(followed);
    return (await followsModel.find({followed: followed}));

};

export const following = async (follower) => {
    console.log("dao followr: ");
    console.log(follower);
    return (await followsModel.find({follower: follower}));
};