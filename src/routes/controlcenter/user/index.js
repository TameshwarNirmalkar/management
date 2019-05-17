import { of } from 'rxjs/observable/of';
import { Router } from 'express';
import Data from '../../../../db/company-department-list.json';

const genericRes = () => {
  return {
    error_status: false,
    code: 'USER_REQUEST_SUCCESS',
    message: 'Request fulfilled successfully'
  };
};

const models = new Router();
models.get('/:user_code/v1', (req, res) => {
  of(Data).subscribe(response => {
    const modifyRes = {
      data: [response.data[0]]
    };
    res.status(200).json(Object.assign({}, { ...modifyRes, ...genericRes() }));
  });
});

models.post('/changeDepartmentRole/:id/v1', (req, res) => {
  res.status(200).json(Object.assign({ ...genericRes() }));
});

export default models;
