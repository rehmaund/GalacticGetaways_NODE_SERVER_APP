import * as commentsDao from "./comments-dao.js";

const CommentsController = (app) => {
  app.get('/api/comments', getAllComments);
  app.get('/api/comments/:cid', findCommentById);
  app.get('/api/comments/user/:uid', findCommentsByUserId);
  app.get('/api/comments/place/:xid', findCommentsByPlaceId);
  app.post('/api/comments', addNewComment);
  app.delete('/api/comments/:cid', deleteComment);
  app.put('/api/comments/:cid', updateComment);
}

const getAllComments = async (req, res) => {
  const comments = await commentsDao.findComments()
  res.json(comments);
}

const findCommentById = async (req, res) => {
  const commentId = req.params.cid;
  const comment = await commentsDao.findById(commentId)
  res.json(comment);
}

const findCommentsByUserId = async (req, res) => {
  const userId = req.params.uid;
  const comments = await commentsDao.findByUserId(userId)
  res.json(comments);
}

const findCommentsByPlaceId = async (req, res) => {
  const placeId = req.params.xid;
  const comments = await commentsDao.findByPlaceId(placeId)
  res.json(comments);
}

const addNewComment = async (req, res) => {
  const newComment = req.body;
  const insertedComment = await commentsDao.createComment(newComment);
  res.json(insertedComment);
}

const deleteComment = async (req, res) => {
  const commentId = req.params.cid;
  const status = await commentsDao.deleteComment(commentId);
  res.json(status);
}

const updateComment = async (req, res) => {
  const commentId = req.params.cid;
  const updates = req.body;
  const status = await commentsDao.updateComment(commentId, updates);
  res.json(status);
}

export default CommentsController;