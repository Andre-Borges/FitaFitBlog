import { CREATED, NO_CONTENT } from 'http-status';
import TagsDAO from './tags.dao';

const tagsDAO = new TagsDAO();

export default class TagsController {

  async list({ params }, h) {
    return await tagsDAO.findAll(params);
  }

  async detail({ params }, h) {
    return await tagsDAO.findByID(params);
  }

  async create({ params, payload }, h) {
    const { postId } = params;
    const tag = await tagsDAO.create({ ...payload, postId })

    return h.response(tag).code(CREATED);
  }

  async update({ params, payload }, h) {
    return await tagsDAO.update(params, payload);
  }


  async destroy({ params }, h) {
    await tagsDAO.destroy(params);

    return h.response().code(NO_CONTENT);
  }
}
