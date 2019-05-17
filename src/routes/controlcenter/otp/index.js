import { Router } from 'express';
import { of } from 'rxjs';
import loginData from '../../../../db/user-table.json';
import UserDetails from '../../../shared-service/store-logged-in-user';
const userDetail = new UserDetails().getInstance();

const USER_SUCCESS = {
  error_status: false,
  code: 'AUTH_LOGIN_200',
  message: 'Login Successful'
};

const DEVICE = {
  device_details: {
    name: 'Chrome',
    model: '',
    device_type: 'Computer',
    version: '72',
    ip: '',
    country_code: ''
  }
};

const MAPPING = {
  mapping: {
    sequence: 0,
    token: 'deab5e52-5595-40c7-bbcd-836049c23f8f'
  }
};

const ORG_DETAILS = {
  org_code: 1,
  app_code: '13',
  org_name: 'srkexports',
  app_name: 'control-center',
  auth_type: 'KAM',
  date_time: '2019-04-15T05:56:12.890Z',
  expire: 86400,
  active_role: '4'
};

const models = new Router();
models.get('/', (req, res) => {
  of(loginData).subscribe(async respone => {
    res.status(200).json({ ...respone });
  });
});

models.post('/', (req, res) => {
  of(loginData).subscribe(response => {
    const username = userDetail.getLoginUser();
    const userlist = response.find(user => user.login_name === username);

    const sendAsResponse = {
      ...USER_SUCCESS,
      data: {
        session_data: Object.assign({}, {
          ...MAPPING,
          ...DEVICE,
          ...ORG_DETAILS
        }, {
          user_details: userlist
        })
      }
    };
    res.status(200).json({
      ...sendAsResponse
    });
  });
});

export default models;