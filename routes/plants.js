var express = require('express');
var router = express.Router();
const plantsService = require('../controllers/plantsService')

router.post('/deletePlant/:plant_id', plantsService.deletePlant)
router.get('/getPlants', plantsService.getPlants)
router.post('/postPlant', plantsService.postPlant)
router.post('/updatePlant/:plant_id', plantsService.updatePlant)

module.exports = router;