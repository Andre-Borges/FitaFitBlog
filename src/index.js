require('dotenv').config();

require = require('esm')(module);
const { start } = require('./config/server.config.js');
start();