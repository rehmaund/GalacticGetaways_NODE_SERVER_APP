import followsModel from "./follows-model.js";
import * as followDao from "./follows-dao.js";

function FollowsController(app) {
    const followUser = async (req, res) => {
        const currentUser = req.session["user"];
        const followed = req.params.followedId;
        const followObj = { follower: currentUser._id, followed: followed};
        const follows = await followDao.followUser(followObj);
        res.json(follows);

    }

    app.post("/api/users/:followerId/follows/:followedId", followUser);

}

export default FollowsController;