const {Router}=require('express')
const { getDocuments } = require('../controllers/documentsController')
const router=Router()



router.get("/documents",getDocuments)




module.exports=router