import * as countersDao from "./counters-dao.js";

const CountersController = (app) => {
  app.get('/api/counters/:xid', findCountersByPlaceId);
  app.post('/api/counters', createCounter);
  app.put('/api/counters/:xid', updateCounter);
  app.get('/api/counters', findAllCounters);
}

const findCountersByPlaceId = async (req, res) => {
  const xid = req.params.xid;
  const counters = await countersDao.findCountersByPlaceId(xid)
  res.json(counters);
}

const findAllCounters = async (req, res) => {
  const counters = await countersDao.findAllCounters();
  res.json(counters);
}

const createCounter = async (req, res) => {
  const newCounter = req.body;
  const insertedCounter = await countersDao.createCounter(newCounter);
  res.json(insertedCounter);
}

const updateCounter = async (req, res) => {
  const xid = req.params.xid;
  const counter = req.body;
  const updatedCounter = await countersDao.updateCounter(xid, counter);
  res.json(updatedCounter);
}

export default CountersController;