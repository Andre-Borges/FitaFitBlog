import { create, login }from './users.controllers';
import * as Schemas from './users.schemas';

export default [
  {
    method: 'POST',
    path: '/users',
    handler: create,
    config: {
      auth: false,
      validate: Schemas.create
    }
  },
  {
    method: 'POST',
    path: '/users/login',
    handler: login,
    config: {
      auth: false,
      validate: Schemas.create
    }
  }
];
