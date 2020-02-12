import TagsController from './tags.controllers';
import * as Schemas from './tags.schemas';

const controller = new TagsController();

export default [
  {
    method: 'GET',
    path: '/posts/{postId}/tags',
    handler: controller.list,
    config: {
      tags: ['api', 'posts', 'tags'],
      validate: Schemas.list
    }
  },
  {
    method: 'GET',
    path: '/posts/{postId}/tags/{id}',
    handler: controller.detail,
    config: {
      tags: ['api', 'posts', 'tags'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/posts/{postId}/tags',
    handler: controller.create,
    config: {
      tags: ['api', 'posts', 'tags'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/posts/{postId}/tags/{id}',
    handler: controller.update,
    config: {
      tags: ['api', 'posts', 'tags'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/posts/{postId}/tags/{id}',
    handler: controller.destroy,
    config: {
      tags: ['api', 'posts', 'tags'],
      validate: Schemas.destroy
    }
  }
];
