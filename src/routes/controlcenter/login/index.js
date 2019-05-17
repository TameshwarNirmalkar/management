import { of } from 'rxjs';
import { Router } from 'express';
import Data from '../../../../db/user-table.json';
import { all } from './all';
import UserDetails from '../../../shared-service/store-logged-in-user';
const userDetail = new UserDetails().getInstance();

const USER_NOT_FOUND = { message: 'Invalid User: user not found', code: 200, error_status: true };
const USER_SUCCESS = { error_status: false, code: 'AUTH_LOGIN_200', message: 'OTP Send to you mobile ******7447' };

const models = new Router();
models.get('/', all);

models.post('/v1', (req, res) => {
  /* eslint-disable camelcase */
  const { login_name, password } = req.body;
  of(Data).subscribe(response => {
    const userlist = response.find(user => (user.login_name === login_name) && (user.password === password));
    if (!userlist) {
      res.status(200).json({ ...USER_NOT_FOUND });
    } else {
      userDetail.setLoginUser(login_name);
      res.status(200).json({ ...USER_SUCCESS });
    }
  });
  /* eslint-enable camelcase */
});

export default models;
