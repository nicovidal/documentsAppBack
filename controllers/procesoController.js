const Proceso=require('../models/proceso')

const createProceso=async(req,res)=>{
try {
    
    const {codigo,tipo_proceso}=req.body

    const newProceso=await Proceso.create({codigo,tipo_proceso})

    return res.status(201).json({
        message:'Proceso creado con exito',
        proceso:newProceso
    })

} catch (error) {
    return res.status(500).json({
        message:'Ocurrio un error al crear el proceso',
        error:error.message
    })
}

}


module.exports={
    createProceso
}