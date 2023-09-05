const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('videogame', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripción: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Plataformas: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lanzamiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Rating: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
};