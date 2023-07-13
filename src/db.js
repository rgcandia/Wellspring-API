const { Sequelize } = require('sequelize');
require('dotenv').config();
const {POSTGRES_DATABASE,POSTGRES_PASSWORD,POSTGRES_HOST,POSTGRES_USER} = process.env;

const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: 'postgres',
  dialectModule:require('pg'),
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

module.exports = {
  conn:sequelize
}
