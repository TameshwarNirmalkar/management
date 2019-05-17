import assignedJson from '../../../../db/assigned.json';
import revokeJson from '../../../../db/revoke.json';
import assignableJson from '../../../../db/assignable.json';

const DATA_CONS = {
  assigned: assignedJson,
  revoked: revokeJson,
  assignable: assignableJson
};

const Resources = (req, res) => {
  const queryParam = req.query;
  if (!DATA_CONS[queryParam.operation]) {
    res.status(404).json({ message: 'Paramater not matched.' });
  } else {
    res.status(200).json(DATA_CONS[queryParam.operation]);
  }
};

export default Resources;
