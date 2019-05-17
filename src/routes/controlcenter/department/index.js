import { Router } from 'express';
import { of } from 'rxjs';
import data from '../../../../db/department-list.json';

const models = new Router();
const departmentData = of(data);
models.get('/:user_code/v1', (req, res) => {
  departmentData.subscribe(respone => {
    res.status(200).json({ ...respone });
  });
});

export default models;
