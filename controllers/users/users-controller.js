import * as usersDao from "./users-dao.js";
import * as countersDao from "../counters/counters-dao.js";


const UserController = (app) => {
  app.get('/api/users', getAllUsers)
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/username/:username', findByUsername);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/:uid/likes/increment', incrementUserLikes);
  app.put('/api/users/:uid/recommendations/increment', incrementUserRecommendations);
  app.put('/api/users/:uid/comments/increment', incrementUserComments);
  app.put('/api/users/:uid/actionsTaken/increment', incrementUserActionsTaken);
  app.put('/api/users/:uid/likes/decrement', decrementUserLikes);
  app.put('/api/users/:uid/recommendations/decrement', decrementUserRecommendations);
  app.put('/api/users/:uid/comments/decrement', decrementUserComments);
  app.put('/api/users/:uid/actionsTaken/decrement', decrementUserActionsTaken);
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

const findByUsername = async (req, res) => {
  const username = req.params.username;
  const user = await usersDao.findByUsername(username)
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
  const user = req.body;
  console.log(user)
  const status = await usersDao.updateUser(userId, user);
  res.json(status);
}

const incrementUserLikes = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.incrementLikes(userId);
  res.json(status);
}

const incrementUserRecommendations = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.incrementRecommendations(userId);
  res.json(status);
}

const incrementUserComments = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.incrementComments(userId);
  res.json(status);
}

const incrementUserActionsTaken = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.incrementActions(userId);
  res.json(status);
}

const decrementUserLikes = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.decrementLikes(userId);
  res.json(status);
}

const decrementUserRecommendations = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.decrementRecommendations(userId);
  res.json(status);
}

const decrementUserComments = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.decrementComments(userId);
  res.json(status);
}

const decrementUserActionsTaken = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.decrementActions(userId);
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

const profile  = async (req, res) => {
  const user = req.session["user"];
  if (!user) {
    res.sendStatus(404);
    return;
  }
  res.json(user);
};

const logout   = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);};

export default UserController;