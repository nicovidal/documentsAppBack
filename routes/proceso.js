const {Router}=require('express')
const { createProceso } = require('../controllers/procesoController')
const router=Router()


router.post('/create',createProceso)

module.exports=router
