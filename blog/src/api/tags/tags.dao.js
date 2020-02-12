import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const Tag = instances.getModel('tag');

export default class TagsDAO {

  async findAll(where) {
    return Tag.findAll({ where });
  }

  async findByID(where) {
    return getObjectOr404(Tag, { where });
  }

  async create(data) {
    return Tag.create(data);
  }

  async update(where, data) {
    const tag = await this.findByID(where);

    return await tag.update(data);
  }

  async destroy(where) {
    const tag = await this.findByID(where);

    return tag.destroy();
  }
}
