const Box = require('../models/box');


const createBox = async (req, res) => {
  try {
    const {
      numero,
      estado,
      fecha_apertura,
      fecha_cierre,
      id_sucursal,
      nombre_sucursal,
    } = req.body;


    if (!numero || !estado) {
      return res.status(400).json({
        message: 'Los campos "numero" y "estado" son obligatorios.',
      });
    }

    const newBox = await Box.create({
      numero,
      estado,
      fecha_apertura,
      fecha_cierre,
      id_sucursal,
      nombre_sucursal,
    });

    return res.status(201).json({
      message: 'Caja creada con éxito.',
      box: newBox,
    });
  } catch (error) {
    console.error('Error al crear la caja:', error);
    return res.status(500).json({
      message: 'Error al crear la caja.',
      error: error.message,
    });
  }
};


const getBoxes = async (req, res) => {
  try {
    const boxes = await Box.findAll();

    if (!boxes || boxes.length === 0) {
      return res.status(404).json({
        message: 'No se encontraron cajas.',
      });
    }

    return res.status(200).json(boxes);
  } catch (error) {
    console.error('Error al obtener las cajas:', error);
    return res.status(500).json({
      message: 'Error al obtener las cajas.',
      error: error.message,
    });
  }
};

module.exports = {
  createBox,
  getBoxes,
};
