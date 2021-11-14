require('dotenv').config();

const Sequelize = require('sequelize');

// Create URI string from environment variables defined in .env file
const DB_URI = `mysql://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const sequelize = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(DB_URI, {
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;