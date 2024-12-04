const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config'); 

const Proceso = sequelize.define('Proceso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  codigo:{
    type:DataTypes.STRING,
    allowNull:true
  },
  tipo_proceso:{
    type:DataTypes.STRING,
    allowNull:true
  }

}, {
  tableName: 'proceso',
  timestamps: true,
});

module.exports = Proceso;
