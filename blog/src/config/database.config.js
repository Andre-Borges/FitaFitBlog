import { Sequelize } from 'sequelize';
import Env from './environment.config';

export default {
  default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
    dialect: 'mysql',
    host: Env.DB_HOST,
    port: Env.DB_PORT,
  }),
};
