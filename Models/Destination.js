const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Categorie = require('./Categorie'); 

class Destination extends Model {}

Destination.init({
    DE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DE_Libelle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DE_Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    DE_Prix: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false
    },
    DE_Disponibilite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    CA_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categorie,
            key: 'CA_ID'
        }
    }
}, {
    sequelize,
    modelName: 'Destination',
    tableName: 'destinations',
    timestamps: false
});

module.exports = Destination;
