const FOLLOW_URL = "http://localhost:4000/api/follows";

export const followUser = async (userId) => {
    const response = await axios.post(FOLLOW_URL)
}




const followsSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.types.ObjectId,
        ref: "users"},
    followed: {
        type: mongoose.Schema.types.ObjectId,
        ref: "users"},
    }, {collections: "follows"}
);
export default followsSchema;

/*

in controller: get followed person from params, get current user from session
This does an inner join: .populate("Follower", "username").exec();




 */