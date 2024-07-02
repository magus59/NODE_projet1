const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Paiement extends Model {}

Paiement.init({
    PA_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PA_Montant: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false
    },
    PA_DatePaiement: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    PA_Methode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PA_Statut: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Paiement',
    tableName: 'paiements',
    timestamps: false
});

module.exports = Paiement;
