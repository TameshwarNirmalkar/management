const Resources = (req, res) => {
  const queryParam = req.query;
  console.log(queryParam.operation);
  res.status(200).json({
    code: '200',
    error_status: false,
    message: 'Assigned....'
  });

};

export default Resources;
