const express = require('express')
const {register,allPlatforms,deletePlataform}=require('../controllers/registerController')

const router = express.Router()


router.post('/newPlatform',register)
.get('/allPlatforms',allPlatforms)
.delete('/deletePlatform/:objectApp_id',deletePlataform)


module.exports = router
