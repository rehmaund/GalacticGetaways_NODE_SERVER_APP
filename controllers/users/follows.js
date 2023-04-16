const FOLLOW_URL = "http://localhost:4000/api/follows";

export const followUser = async (userId) => {
    const response = await axios.post(FOLLOW_URL)
}




import followsSchema = mongoose.Schema({
    follower: {
        type: mongoode.Schema.types.ObjectId,
        ref: "users"},
    followed: {
        type: mongoode.Schema.types.ObjectId,
        ref: "users"},
    }, {collections: "follows"}
);
export default followsSchema;

/*

in controller: get followed person from params, get current user from session
This does an inner join: .populate("Follower", "username").exec();




 */