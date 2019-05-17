const Resources = (req, res) => {
  const queryParam = req.query;
  console.log(queryParam.operation);
  res.status(200).json({
    error_status: false,
    code: '200',
    message: 'Move to revoked.'
  });
};

export default Resources;
