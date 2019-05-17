import { Router } from 'express';
import Login from './controlcenter/login';
import Logout from './controlcenter/logout';
import User from './controlcenter/user';
import Department from './controlcenter/department';
import Role from './controlcenter/role';
import Resources from './controlcenter/resources';
import Otp from './controlcenter/otp';
import LoginAs from './controlcenter/loginas';
import RfidAssignment from './controlcenter/rfidassignment';
import Users from './controlcenter/users';
import Token from './controlcenter/token';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/controlcenter/login', Login);
routes.use('/controlcenter/logout', Logout);
routes.use('/controlcenter/user', User);
routes.use('/controlcenter/user/department', Department);
routes.use('/controlcenter/user/role', Role);
routes.use('/controlcenter/orgs', Resources);
routes.use('/controlcenter/users/permissions/v1', Resources);
routes.use('/controlcenter/otp/v1', Otp);
routes.use('/controlcenter/user/loginAs', LoginAs);
routes.use('/controlcenter/users/rfidassignments', RfidAssignment);
routes.use('/controlcenter/users', Users);
routes.use('/controlcenter/token', Token);

export default routes;
