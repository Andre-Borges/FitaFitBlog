import Bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import { getObjectOr404 } from '../utils/database.utils';
import Boom from '@hapi/boom';
import { instances } from 'hapi-sequelizejs'
import Env from '../../config/environment.config';

export function getToken(payload, options = {}) {
    return JWT.sign(payload, Env.JWT_SECRET, { expiresIn: Env.JWT_EXPIRES_IN, ...options })
}

export async function authenticate({ email, password }) {
    const model = instances.getModel('user');
    const user = await getObjectOr404(model, { where: { email }});
    const isValid = await Bcrypt.compare(password, user.password);

    if (!isValid) {
      throw Boom.notFound();
    }

    return user;
  }