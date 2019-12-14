const {
    NODE_ENV = 'development',
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
    DB_USERNAME,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    PORT = 3000
} = process.env;

export default {
    ENV: NODE_ENV,
    PORT,
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
    DB_USERNAME,
    JWT_EXPIRES_IN,
    JWT_SECRET
};