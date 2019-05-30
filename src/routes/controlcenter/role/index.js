import { Router } from 'express';
import { of } from 'rxjs';
import data from '../../../../db/role.json';

const models = new Router();
models.get('/:user_code/v1', (req, res) => {
  of(data).subscribe(respone => {
    res.status(200).json({ ...respone });
  });
});

models.post('/:user_code/v1', (req, res) => {
  of(data).subscribe(respone => {
    const payload = {
      error_status: false,
      code: 'USER_REQUEST_SUCCESS',
      message: 'Request fulfilled successfully',
      data: {
        appsCode: null,
        createdBy: null,
        createdDatetime: null,
        createdIplocationId: null,
        modifiedBy: null,
        modifiedDatetime: null,
        modifiedIplocationId: null,
        category_code: respone.data.length + 1,
        category_key: req.body.role_key,
        category_name: req.body.role_name,
        isActive: null,
        userMasters: null
      }
    };
    res.status(200).json({ ...payload });
  });
});

export default models;
