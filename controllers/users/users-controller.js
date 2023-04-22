import * as usersDao from "./users-dao.js";


const UserController = (app) => {
  app.get('/api/users', getAllUsers)
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/username/:username', findUserByCredentials);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/:uid/likes', updateUserLikes);
  app.put('/api/users/:uid/comments', updateUserComments);
  app.put('/api/users/:uid/actionsTaken', updateUserActionsTaken);
  app.post("/api/users/register", register);
  app.post("/api/users/login",    login);
  app.post("/api/users/profile",  profile);
  app.post("/api/users/logout",   logout);
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

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.total_likes = 0;
  newUser.total_recs = 0;
  newUser.total_comments = 0;
  newUser.actions_taken = 0;
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

const findUserByCredentials = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const status = await usersDao.findUserByCredentials(username, password);
  res.json(status);

}

const register = async (req, res) => { const username = req.body.username;
  const password = req.body.password;
  const user = await usersDao
      .findUserByCredentials(username, password);
  if (user) {
    res.sendStatus(409);
    return;
  }
  const newUser = await usersDao.createUser(req.body);
  console.log(newUser);
  req.session["user"] = newUser;
  console.log("new session user set");
  res.json(newUser);
};

const login    = async (req, res) => {  const username = req.body.username;
  const password = req.body.password;
  const user = await usersDao
      .findUserByCredentials(username, password);
  if (user) {
    req.session["user"] = user;
    res.json(user);
  } else {
    res.status(401).json({ message: "Invalid credentials. Please try again." });
  }
};

const profile  = async (req, res) => { const currentUser = req.session["user"];
  if (!currentUser) {
    res.sendStatus(404);
    return;
  }
  res.json(currentUser);
};

const logout   = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);};

export default UserController;