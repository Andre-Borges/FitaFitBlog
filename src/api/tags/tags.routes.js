import { list, detail, create, update, destroy } from './tags.controllers';
import * as Schemas from './tags.schemas';

export default [
  {
    method: 'GET',
    path: '/posts/{postId}/tags',
    handler: list
  },
  {
    method: 'GET',
    path: '/posts/{postId}/tags/{id}',
    handler: detail,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  },
  {
    method: 'POST',
    path: '/posts/{postId}/tags',
    handler: create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/posts/{postId}/tags/{id}',
    handler: update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/posts/{postId}/tags/{id}',
    handler: destroy,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  }
];
