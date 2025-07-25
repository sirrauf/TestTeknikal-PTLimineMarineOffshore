import * as model from '../models/drydockModel.js';

export const getAll = async (req, res) => {
  const data = await model.getAllDryDocks();
  res.json(data);
};

export const getOne = async (req, res) => {
  const data = await model.getDryDockById(req.params.id);
  res.json(data);
};

export const create = async (req, res) => {
  const data = await model.createDryDock(req.body);
  res.json(data);
};

export const remove = async (req, res) => {
  await model.deleteDryDock(req.params.id);
  res.json({ message: 'Deleted' });
};
