const knex = require('knex');
const configutarion = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configutarion.test : configutarion.development;

const connection = knex(config);

module.exports = connection;