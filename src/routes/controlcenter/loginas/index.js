import { of } from 'rxjs/observable/of';
import { Router } from 'express';
import Data from '../../../../db/loginas.json';
import { writeFile } from 'fs';

const generateCommonRes = () => {
  return {
    error_status: false,
    code: 'USER_SUCCESS',
    message: 'Request fulfilled successfully'
  };
};

const models = new Router();
models.get('/api/v1', (req, res) => {
  of(Data).subscribe(response => {
    res.status(200).json(Object.assign({}, { data: response }, { ...generateCommonRes() }));
  });
});

models.post('/api/v1', (req, res) => {
  const newData = [];
  req.body.forEach(element => {
    newData.push(
      Object.assign(
        {},
        { ...element, loginGrantCode: new Date().valueOf(), status: 'Active', created_datetime: new Date() }
      )
    );
  });
  of(Data).subscribe(response => {
    const result = response.concat(newData);
    writeFile('db/loginas.json', JSON.stringify(result, null, 4), (err) => {
      if (err) { throw err; }
      res.status(200).json({ data: newData, ...generateCommonRes() });
    });
  });
});

export default models;
