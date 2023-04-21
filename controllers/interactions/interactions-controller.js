import * as interactionsDao from "./interactions-dao.js";

const InteractionsController = (app) => {
  app.get('/api/interactions', getAllInteractions);
  app.get('/api/interactions/uid/:uid', findInteractionsByUserId);
  app.get('/api/interactions/xid/:xid', findInteractionsByPlaceId);
  app.get('/api/interactions/:xid/:uid', findSpecific);
  app.post('/api/interactions', createInteraction);
  app.delete('/api/interactions/:iid', deleteInteraction);
}

const getAllInteractions = async (req, res) => {
  const interactions = await interactionsDao.getAllInteractions()
  res.json(interactions);
}

const findInteractionsByUserId = async (req, res) => {
  const userId = req.params.uid;
  const interactions = await interactionsDao.findInteractionsByUserId(userId)
  res.json(interactions);
}

const findInteractionsByPlaceId = async (req, res) => {
  const xid = req.params.xid;
  const interactions = await interactionsDao.findInteractionsByPlaceId(xid)
  res.json(interactions);
}

const findSpecific = async (req, res) => {
  const xid = req.params.xid;
  const userId = req.params.uid;
  const interaction = await interactionsDao.findSpecific(xid, userId)
  res.json(interaction);
}

const createInteraction = async (req, res) => {
  const newInteraction = req.body;
  const insertedInteraction = await interactionsDao.createInteraction(newInteraction);
  res.json(insertedInteraction);
}

const deleteInteraction = async (req, res) => {
  const interactionId = req.params.iid;
  const status = await interactionsDao.deleteInteraction(interactionId);
  res.json(status);
}

export default InteractionsController;