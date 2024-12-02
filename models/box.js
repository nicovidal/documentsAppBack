const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Box = sequelize.define("Box", {
  id_Caja: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    tableName:'box',
    timestamps: true,
}

);

module.exports = Box;
