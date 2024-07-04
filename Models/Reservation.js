const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Reservation extends Model {}

Reservation.init({
    RE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RE_DateReservation: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false
    },
    RE_DateDebut: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    RE_DateFin: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    DE_ID: {
        type: DataTypes.INTEGER,        allowNull: false
    },
    CL_ID: {
        type: DataTypes.INTEGER,        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'reservations',
    timestamps: false
});

module.exports = Reservation;
