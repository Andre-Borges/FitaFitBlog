import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

export default class PostsDAO {
  model = instances.getModel('post');

  findAll() {
    const params = {
      include: [
        'tags'
      ]
    };

    return this.model.findAll(params);
  }

  async findByID(id) {
    const options = {
      where: { id },
      include: [
        'user',
        'tags'
      ]
    };

    return getObjectOr404(this.model, options);
  }

  create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    const post = await this.findByID(id);

    return post.update(data);
  }

  async destroy(id) {
    const post = await this.findByID(id);

    return post.destroy();
  }
}
