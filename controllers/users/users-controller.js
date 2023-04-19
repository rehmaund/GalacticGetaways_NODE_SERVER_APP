import * as usersDao from "./users-dao";


const UserController = (app) => {
  app.get('/api/users', getAllUsers)
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/username/:username', findUserByUsername);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/:uid/likes', updateUserLikes);
  app.put('/api/users/:uid/comments', updateUserComments);
  app.put('/api/users/:uid/actionsTaken', updateUserActionsTaken);
}

const getAllUsers = async (req, res) => {
  const users = await usersDao.findUsers()
  res.json(users);
}

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersDao.findByID(userId)
  res.json(user);
}

const findUserByUsername = async (req, res) => {
  const username = req.params.username;
  const user = await usersDao.findByUsername(username)
  res.json(user);
}

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.total_likes = 0;
  newUser.total_recs = 0;
  newUser.total_comments = 0;
  newUser.total_actions_taken = 0;
  const insertedUser = await usersDao.createUser(newUser);
  res.json(insertedUser);
}

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.deleteUser(userId);
  res.json(status);
}

const updateUser = async (req, res) => {
  const userId = req.params.uid;
  const updates = req.body;
  const status = await usersDao.updateUser(userId, updates);
  res.json(status);
}

const updateUserLikes = async (req, res) => {
  const userId = req.params.uid;
  const newLikesNum = req.body;
  const status = await usersDao.updateLikes(userId, newLikesNum);
  res.json(status);
}

const updateUserComments = async (req, res) => {
  const userId = req.params.uid;
  const newCommentsNum = req.body;
  const status = await usersDao.updateComments(userId, newCommentsNum);
  res.json(status);
}

const updateUserActionsTaken = async (req, res) => {
  const userId = req.params.uid;
  const newActionsNum = req.body;
  const status = await usersDao.updateActions(userId, newActionsNum);
  res.json(status);
}

export default UserController;