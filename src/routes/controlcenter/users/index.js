import { of } from 'rxjs/observable/of';
import { Router } from 'express';
// import Data from '../../../../db/company-department-list.json';
import ftpData from '../../../../db/ftp.json';

const genericRes = () => {
  return {
    error_status: false,
    code: 'USER_REQUEST_SUCCESS',
    message: 'Request fulfilled successfully'
  };
};

const models = new Router();
models.get('/:user_code/forgot-password/v1', (req, res) => {
  res.status(200).json(Object.assign({}, { ...genericRes() }));
});

// role_id=${role_id}&user_id=51&org_id=1&dept_id=1&operation=ftp
models.get(`/permissions/ftp/v1`, (req, res) => {
  of(ftpData).subscribe(response => {
    res.status(200).json(Object.assign({}, { ...genericRes(), ...response }));
  });
});

export default models;
