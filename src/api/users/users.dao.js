import { instances } from 'hapi-sequelizejs';

export default class UsersDAO {
  model = instances.getModel('user');

  async create(data) {
    return this.model.create(data);
  }
}
