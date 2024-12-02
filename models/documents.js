const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config'); 

const Document = sequelize.define('Document', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  numeroCaja:{
    type:DataTypes.STRING,
    allowNull:true
  }
}, {
  tableName: 'documents',
  timestamps: true,
});

module.exports = Document;
