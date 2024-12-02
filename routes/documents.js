const {Router}=require('express')
const { getDocuments } = require('../controllers/documentsController')
const router=Router()



router.get("/",getDocuments)




module.exports=router