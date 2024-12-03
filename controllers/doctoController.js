const Docto = require("../models/docto");


const getDoctos = async (req, res) => {
  try {
    const doctos = await Docto.findAll();

    if (!doctos || doctos.length === 0) {
      return res.status(404).json({ message: "No se encontraron documentos." });
    }

    return res.status(200).json(doctos);
  } catch (error) {
    console.error("Error al obtener los documentos:", error);
    return res.status(500).json({
      message: "Ocurrió un error al obtener los documentos.",
      error: error.message,
    });
  }
};


const createDocto = async (req, res) => {
  try {
    const { nombre, id_proceso } = req.body;

    if (!nombre) {
      return res.status(400).json({ message: 'El campo "nombre" es obligatorio.' });
    }

    const newDocto = await Docto.create({ nombre, id_proceso });

    return res.status(201).json({
      message: "Documento creado con éxito.",
      docto: newDocto,
    });
  } catch (error) {
    console.error("Error al crear el documento:", error);
    return res.status(500).json({
      message: "Ocurrió un error al crear el documento.",
      error: error.message,
    });
  }
};


const getDoctoById = async (req, res) => {
  try {
    const { id } = req.params;
    const docto = await Docto.findByPk(id);

    if (!docto) {
      return res.status(404).json({ message: "Documento no encontrado." });
    }

    return res.status(200).json(docto);
  } catch (error) {
    console.error("Error al obtener el documento:", error);
    return res.status(500).json({
      message: "Ocurrió un error al obtener el documento.",
      error: error.message,
    });
  }
};

module.exports = {
  getDoctos,
  createDocto,
  getDoctoById,
};
