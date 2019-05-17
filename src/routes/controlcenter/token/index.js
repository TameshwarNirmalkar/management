import { of } from 'rxjs/observable/of';
import { Router } from 'express';
import Data from '../../../../db/login.json';

const genericRes = () => {
  return {
    error_status: false,
    code: 'USER_REQUEST_SUCCESS',
    message: 'Request fulfilled successfully'
  };
};

const models = new Router();
models.get('/otp/v1', (req, res) => {
  res.status(200).json(Object.assign({ ...genericRes() }));
});

models.post('/otp/v1', (req, res) => {
  of(Data).subscribe(response => {
    const modifyRes = {
      data: response.data
    };
    res.status(200).json(Object.assign({}, { ...modifyRes, ...genericRes() }));
  });
});

export default models;
