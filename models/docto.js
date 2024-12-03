const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Docto = sequelize.define(
  "Docto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_proceso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:'proceso',
        key:'id'
      }
    },
  },
  {
    tableName: "docto",
    timestamps: true,
  }
);

module.exports = Docto;
