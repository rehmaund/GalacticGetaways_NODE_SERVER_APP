import followsModel from "./follows-model.js";

export const followUser = async (follow) => {
    await followsModel.create(follow);
}