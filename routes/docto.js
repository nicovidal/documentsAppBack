const {Router}=require('express')
const { getDoctos, createDocto, getDoctoById } = require('../controllers/doctoController')
const router=Router()


router.get("/get",getDoctos)
router.post("/create",createDocto)
router.get("/:id",getDoctoById)



module.exports=router