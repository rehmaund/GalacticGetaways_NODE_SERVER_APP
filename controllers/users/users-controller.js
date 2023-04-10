import people from './users.js'
let users = people

const UserController = (app) => {
  app.get('/api/users', getAllUsers)
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/username/:username', findUserByUsername);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/:uid/likes', incrementUserLikes);
  app.put('/api/users/:uid/comments', incrementUserComments);
  app.put('/api/users/:uid/recommendation', incrementUserRecommendations);
  app.put('/api/users/:uid/contributions', incrementUserContributions);
  app.put('/api/users/:uid/actionsTaken', incrementUserActionsTaken);
}

const getAllUsers = (req, res) => {
  const type = req.query.type
  if(type) {
    const usersOfType = users
    .filter(u => u.type === type)
    res.json(usersOfType)
    return
  }
  res.json(users)
}

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  res.json(user);
}

const findUserByUsername = (req, res) => {
  const username = req.params.username;
  const user = users
  .find(u => u.username === username);
  res.json(user);
}

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime() + '';
  if (newUser.type === "ALIEN") {
    newUser.total_likes = 0;
    newUser.total_comments = 0;
  } else if (newUser.type === "HUMAN") {
    newUser.total_recommendations = 0;
    newUser.total_contributions = 0;
  } else if (newUser.type === "MODERATOR") {
    newUser.total_actions_taken = 0;
  }
  users.push(newUser);
  res.json(newUser);
}

const deleteUser = (req, res) => {
  const userId = req.params.uid;
  users = users.filter(usr =>
      usr._id !== userId);
  res.sendStatus(200);
}

const updateUser = (req, res) => {
  const userId = req.params.uid;
  const updates = req.body;
  users = users.map((usr) =>
      usr._id === userId ?
          {...usr, ...updates} :
          usr
  );
  res.sendStatus(200);
}

const incrementUserLikes = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  if (user.type === "ALIEN") {
    user.total_likes += 1;
  }
  res.json(user);
}

const incrementUserComments = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  if (user.type === "ALIEN") {
    user.total_comments += 1;
  }
  res.json(user);
}

const incrementUserRecommendations = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  if (user.type === "HUMAN") {
    user.total_recommendations += 1;
  }
  res.json(user);
}

const incrementUserContributions = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  if (user.type === "HUMAN") {
    user.total_contributions += 1;
  }
  res.json(user);
}

const incrementUserActionsTaken = (req, res) => {
  const userId = req.params.uid;
  const user = users
  .find(u => u._id === userId);
  if (user.type === "MODERATOR") {
    user.total_actions_taken += 1;
  }
  res.json(user);
}


export default UserController