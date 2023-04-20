import commentsModel from './comments-model.js';
export const findComments = () => commentsModel.find();

export const findById = async (commentId) => {
    try {
        const comment = await commentsModel.findOne({commentId});
        return comment;
    } catch (error) {
        console.error(error);
    }
}

export const findByUserId = async (uid) => {
    try {
        const comments = await commentsModel.find({uid});
        return comments;
    } catch (error) {
        console.error(error);
    }
}

export const findByPlaceId = async (xid) => {
    try {
        const comments = await commentsModel.find({xid: xid});
        return comments;
    } catch (error) {
        console.error(error);
    }
}

export const createComment = (comment) => commentsModel.create(comment);

export const deleteComment = (cid) => commentsModel.deleteOne({_id: cid});

export const updateComment = (cid, comment) => commentsModel.updateOne({_id: cid}, comment, { new: true })
