import { list, create, detail, update, destroy } from './posts.controllers';
import * as Schemas from './posts.schemas';

export default [
  {
    method: 'GET',
    path: '/posts',
    handler: list
  },
  {
    method: 'GET',
    path: '/posts/{id}',
    handler: detail,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  },
  {
    method: 'POST',
    path: '/posts',
    handler: create,
    config: {
      validate: {
        payload: Schemas.payload
      }
    }
  },
  {
    method: 'PUT',
    path: '/posts/{id}',
    handler: update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/posts/{id}',
    handler: destroy,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  }
];
