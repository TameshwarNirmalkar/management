const Resources = (req, res) => {
  const queryParam = req.query;
  res.status(200).json({ message: 'Assigned....', queryParam });
};

export default Resources;
