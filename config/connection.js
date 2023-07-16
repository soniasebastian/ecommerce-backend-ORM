const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({path:path.resolve(__dirname, '../.env')});

const sequeize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.db_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
    },
});

module.exports = sequelize;