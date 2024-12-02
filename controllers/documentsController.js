const {sequelize}=require('../database/config')
const Document=require('../models/documents')




const getDocuments=async (req,res)=>{

    try {

        const documents=await Document.findAll()

        console.log(documents)
        
    } catch (error) {
        
    }
}





module.exports={
    getDocuments
}
