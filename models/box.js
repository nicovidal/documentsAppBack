const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Box = sequelize.define("Box", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_apertura: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fecha_cierre: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_sucursal:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  nombre_sucursal:{
    type:DataTypes.INTEGER,
    allowNull:true
  }
},{
    tableName:'box',
    timestamps: true,
}

);

module.exports = Box;
