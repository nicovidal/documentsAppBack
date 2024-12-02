const {Router}=require('express')
const { getDocuments, createDocument } = require('../controllers/documentsController')
const router=Router()


router.get("/get",getDocuments)
router.post("/create",createDocument)



module.exports=router