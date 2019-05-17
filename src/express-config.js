import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const App = (app) => {
  app.use(cors());
  app.options('*', cors());
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use('/', routes);
};

export default App;
