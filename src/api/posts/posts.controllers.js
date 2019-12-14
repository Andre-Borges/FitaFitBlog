import { CREATED, NO_CONTENT } from 'http-status';

import PostsDAO from './posts.dao';

const postsDAO = new PostsDAO();

export async function list(request, h) {
  return await postsDAO.findAll();
}

export async function detail(request, h) {
  const { id } = request.params;

  return await postsDAO.findByID(id);
}

export async function create(request, h) {
  const { payload } = request;
  const { id: userId } = request.auth.credentials;
  const post = await postsDAO.create({...payload,userId});

  return h.response(post).code(CREATED);
}

export async function update(request, h) {
  const { payload, params: { id } } = request;

  return await postsDAO.update(id, payload);
}

export async function destroy(request, h) {
  const { id } = request.params;

  await postsDAO.destroy(id);

  return h.response().code(NO_CONTENT);
}
