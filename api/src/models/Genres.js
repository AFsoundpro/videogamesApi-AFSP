const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genres', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}