import { CREATED, OK, NO_CONTENT } from 'http-status';
import TagsDAO from './tags.dao';

const tagsDAO = new TagsDAO();

export async function list(request, h) {
    const { postid } = request.params;
    return await tagsDAO.findAll(postid);
}

export async function detail(request, h) {
    const { id } = request.params;
    console.log(id);
    return await tagsDAO.findById(id);
}

export async function create(request, h) {
    const { payload, params: { postid } } = request;
    payload.postid = postid;
    console.log(payload);
    const tag = await tagsDAO.create(payload);
    return h.response(tag).code(CREATED);
}

export async function update(request, h) {
    const { payload, params: { id } } = request;
    return await tagsDAO.update(id, payload);
}

export async function destroy (request, h) {
    const { id } = request.params;
    await tagsDAO.destroy(id);
    return h.response().code(NO_CONTENT);
}