import Env from './environment.config';

export default (server) => { 
    server.auth.strategy('jwt', 'jwt', {
    key: Env.JWT_SECRET,
    validate: async (decoded, request, h) => {
      return { isValid: true, credentials: decoded };
    }
    })
    server.auth.default('jwt');
 }