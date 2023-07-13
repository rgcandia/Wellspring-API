const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://default:teDw5MuWdGB6@ep-black-fire-482660.us-east-1.postgres.vercel-storage.com:5432/verceldb') // Example for postgres
module.exports ={
  conn:sequelize
}