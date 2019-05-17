import { Router } from 'express';

const genericRes = () => {
  return { message: 'User request successfull', error_status: false };
};

const models = new Router();
models.get('/v1', (req, res) => {
  res.status(200).json({ ...genericRes() });
});

export default models;
