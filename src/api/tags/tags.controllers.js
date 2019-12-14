import { CREATED, NO_CONTENT } from 'http-status';
import TagsDAO from './tags.dao';

const tagsDAO = new TagsDAO();

export async function list(request, h) {
  const { params } = request;

  return await tagsDAO.findAll(params);
}

export async function detail(request, h) {
  const { params } = request;

  return await tagsDAO.findByID(params);
}

export async function create(request, h) {
  const { payload, params: { postId } } = request;

  const tag = await tagsDAO.create({ ...payload, postId })

  return h.response(tag).code(CREATED);
}

export async function update(request, h) {
  const { payload, params } = request;

  return await tagsDAO.update(params, payload);
}


export async function destroy(request, h) {
  const { params } = request;

  await tagsDAO.destroy(params);

  return h.response().code(NO_CONTENT);
}
