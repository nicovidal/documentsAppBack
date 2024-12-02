const Document=require('../models/documents')


const getDocuments=async (req,res)=>{
    try {
        const documents=await Document.findAll()
        if (!documents || documents.length === 0) {
            return res.status(404).json({
                ok: false,
                message: "No documents found",
            });
        }

        res.status(200).json(
       
            documents
        )     
    } catch (error) {
       console.log(error)
    }
}


const createDocument = async (req, res) => {
    try {
   
      const { name } = req.body;
  
      if (!name) {
        return res.status(400).json({ message: 'El campo "name" es obligatorio.' });
      }
  
      const newDocument = await Document.create({ name });
  
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
