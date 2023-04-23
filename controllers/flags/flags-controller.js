import * as flagsDao from './flags-dao.js'

const FlagsController = (app) => {
  app.get('/api/flags', getAllFlags);
  app.get('/api/flags/:user/:comment', getFlagByBothIds);
  app.post('/api/flags', createFlag);
  app.delete('/api/flags/:fid', deleteFlag);
}

const getAllFlags = async (req, res) => {
  const flags = await flagsDao.getAllFlags();
  res.json(flags);
}

const getFlagByBothIds = async (req, res) => {
  const user = req.params.user;
  const comment = req.params.comment;
  const flag = await flagsDao.getFlagByBothIds(user, comment);
  res.json(flag);
}

const createFlag = async (req, res) => {
  const newFlag = req.body;
  console.log(newFlag)
  const insertedFlag = await flagsDao.createFlag(newFlag);
  res.json(insertedFlag);
}

const deleteFlag = async (req, res) => {
  const fid = req.params.fid;
  const flag = await flagsDao.deleteFlag(fid);
  res.json(flag);
}

export default FlagsController;
