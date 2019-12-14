import Boom from '@hapi/boom';
import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

export default class TagsDAO {
  model = instances.getModel('tag');

  findAll(where) {
    return this.model.findAll({ where });
  }

  async findByID(where) {
    return getObjectOr404(this.model, { where });
  }

  create(tag) {
    return this.model.create(tag);
  }

  async update(where, data) {
    const tag = await this.findByID(where)

    return await tag.update(data);
  }

  async destroy(where) {
    const tag = await this.findByID(where);

    return tag.destroy();
  }
}
