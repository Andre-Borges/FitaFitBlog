import { instances } from 'hapi-sequelizejs'

const Tag = instances.getModel('Tag');

export default class TagsDAO {
    findAll(where) {
        return Tag.findAll(where);
    }

    findById(id) {
        return Tag.findById(id)
    }

    create(data) {
        return Tag.create(data);
    }

    async update(id, tag) {
        await Tag.update(tag, { where: { id } });
        return await this.findById(id);
    }

    destroy(id) {
        return Tag.destroy({ where: { id }});
    }
}