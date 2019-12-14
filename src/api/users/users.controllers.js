import { CREATED } from 'http-status';
import UsersDAO from './users.dao';
import { authenticate, getToken } from '../utils/auth.utils';

const usersDAO = new UsersDAO();

export async function create(request, h) {
  const { payload } = request;

  const user = await usersDAO.create(payload);

  return h.response(user).code(CREATED);
}

export async function login(request, h) {
  const { payload } = request;
  const user = await authenticate(payload);
  const token = getToken({
    id: user.id,
    email: user.email
  });

  return{user, token} ;
}
