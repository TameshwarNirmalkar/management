import { Router } from 'express';
import getResource from './all';
import postResource from './post-resource';
import putResource from './put-resource';
import deleteResource from './delete';

const models = new Router();
// Organisation Permission
models.get('/roles/permissions/v1', getResource);
models.post('/roles/permissions/v1', postResource);
models.put('/roles/permissions/v1', putResource);
models.delete('/roles/permissions/v1', deleteResource);

// Department Permission
models.get('/departments/roles/permissions/v1', getResource);
models.post('/departments/roles/permissions/v1', postResource);
models.delete('/departments/roles/permissions/v1', deleteResource);

// Users Permission
models.get('/', getResource);
models.post('/', postResource);
models.delete('/', deleteResource);

export default models;
