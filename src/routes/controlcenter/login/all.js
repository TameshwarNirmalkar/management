import data from '../../../../db/login.json';

export const all = (req, res) => {
  res.status(200).json({ ...data });
};
