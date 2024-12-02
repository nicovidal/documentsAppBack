const {sequelize}=require('../database/config')
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


        res.status(200).json({
            ok:true,
            documents
        })     
    } catch (error) {
       console.log(error)
    }
}



module.exports={
    getDocuments
}
