import 'dotenv/config';
import express from 'express';
import App from './express-config';

const app = express();
App(app);

app.listen(3030, () => {
  console.log('App listening on port 3030 url: http://localhost:3030');
});
