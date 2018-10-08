const express = require('express')
const proyecto = require('../controllers/proyectoController')

const router = express.Router()

router.get('/proyectos/:proyectoId', proyecto.findOne)
router.get('/proyectos', proyecto.findAll)
router.post('/proyectos', proyecto.create)

module.exports = router