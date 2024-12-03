const Document=require('../models/documents')

const getDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();

    if (!documents || documents.length === 0) {
      return res.status(404).json({
        ok: false,
        message: 'No documents found',
      });
    }

    res.status(200).json(documents);
  } catch (error) {
    console.error('Error al obtener documentos:', error);
    res.status(500).json({
      message: 'Ocurrió un error al obtener documentos.',
      error: error.message,
    });
  }
};


const createDocument = async (req, res) => {
  try {
 
    const {
      fecha,
      rut_cliente,
      numero_tarjeta,
      respaldo_solicitud,
      id_caja,
      id_docto,
      id_estado,
      numeroCaja,
    } = req.body;

 
    if (!rut_cliente || !numeroCaja) {
      return res.status(400).json({
        message: 'Los campos "rut_cliente" y "numeroCaja" son obligatorios.',
      });
    }

    const newDocument = await Document.create({
      fecha: fecha || new Date(), 
      rut_cliente,
      numero_tarjeta,
      respaldo_solicitud,
      id_caja,
      id_docto,
      id_estado,
      numeroCaja,
    });


    return res.status(201).json({
      message: 'Documento creado con éxito.',
      document: newDocument,
    });
  } catch (error) {
    console.error('Error al crear el documento:', error);


    return res.status(500).json({
      message: 'Ocurrió un error al crear el documento.',
      error: error.message,
    });
  }
};

module.exports={
    getDocuments,
    createDocument
}
