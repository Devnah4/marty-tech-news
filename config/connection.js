const Sequelize = require('sequelize');
require('dotenv').config();

// Sets up databse for use with mysql
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
});

module.exports = sequelize;