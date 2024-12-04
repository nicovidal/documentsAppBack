const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config'); 

const Document = sequelize.define('Document', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  fecha:{
    type:DataTypes.DATE,
    allowNull:true
  },
  rut_cliente:{
    type:DataTypes.STRING,
    allowNull:true
  },
  numero_tarjeta:{
    type:DataTypes.STRING,
    allowNull:true
  },
  respaldo_solicitud:{
    type:DataTypes.STRING,
    allowNull:true
  },
  id_caja:{
    type: DataTypes.INTEGER,
    allowNull:true
  },
  id_docto:{
    type: DataTypes.INTEGER,
    allowNull:true
  },
  id_estado:{
    type: DataTypes.INTEGER,
    allowNull:true
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
