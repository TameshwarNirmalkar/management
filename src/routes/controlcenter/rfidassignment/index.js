import { of } from 'rxjs/observable/of';
import { Router } from 'express';
import Data from '../../../../db/rfidassignment.json';
import { readFile, writeFile } from 'fs';
import { findIndex } from 'lodash';

const genericRes = () => {
  return {
    error_status: false,
    message: 'Request successful done'
  };
};

const models = new Router();
models.get('/v1', (req, res) => {
  of(Data).subscribe(response => {
    if (response.length > 0) {
      res.status(200).json(Object.assign({}, { data: response }, { ...genericRes() }));
    } else {
      res.status(200).json(Object.assign({}, { ...genericRes() }));
    }
  });
});

models.post('/:id/v1', (req, res) => {
  const reqId = req.params.id;
  const tobeSaved = { ...req.body, userRfidAssignmentCode: new Date().valueOf() };

  readFile('db/rfidassignment.json', (err, readRes) => {
    if (err) { throw err; };
    let rfidAssignedData = JSON.parse(readRes);
    const existingUser = findIndex(rfidAssignedData, ['user_code', +reqId]);

    if (existingUser !== -1) {
      rfidAssignedData[existingUser] = req.body;
    } else {
      rfidAssignedData = rfidAssignedData.concat(tobeSaved);
    }
    writeFile('db/rfidassignment.json', JSON.stringify(rfidAssignedData, null, 4), (err) => {
      if (err) throw err;

      const setRes = {
        data: tobeSaved
      };
      res.status(200).json(Object.assign({}, { ...setRes }, { ...genericRes() }));
    });
  });
});

models.delete('/:id/v1', (req, res) => {
  of(Data).subscribe(response => {
    const indexOfCouseInJson = response.filter(item => item.user_code !== +req.params.id);
    writeFile('db/rfidassignment.json', JSON.stringify(indexOfCouseInJson, null, 4), (err) => {
      if (err) { throw err; }
      res.status(200).json({ ...genericRes() });
    });
  });
});

export default models;
