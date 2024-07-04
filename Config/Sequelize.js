const Sequelize = require('sequelize');
const config = require('./config.json');

//créer la connexion à la base de données
//equivalent à PDO en PHP
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: "mysql",
    port : config.port,
});

module.exports = sequelize;