import * as followDao from "./follows-dao.js";

function FollowsController(app) {
    const followUser = async (req, res) => {
        const currentUser = req.params['followerId'];
        const followed = req.params['followedId'];
        const followObj = { follower: currentUser, followed: followed};
        const follows = await followDao.followUser(followObj);
        res.json(follows);
    }

    const unfollowUser = async (req, res) => {
        const currentUser = req.params['followerId'];
        const soonToBeUnfollowed = req.params['followedId'];
        const unfollowObj = { follower: currentUser, followed: soonToBeUnfollowed};
        const unfollow = await followDao.unfollowUser(unfollowObj);
        res.json(unfollow);
    }

    const followers = async (req, res) => {
        const followed = req.params['followedId'];
        const followers = await followDao.followers(followed);
        res.json(followers);

    }

    const following = async (req, res) => {
        const follower = req.params['follower'];
        const whoAmIFollowing = await followDao.following(follower);
        res.json(whoAmIFollowing);
    }

    app.post("/api/follows/:followerId/:followedId", followUser);
    app.get("/api/followers/:followedId", followers);
    app.get("/api/following/:follower", following);
    app.delete("/api/unfollows/:followerId/:followedId", unfollowUser);

}

export default FollowsController;