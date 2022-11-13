var express = require('express');
var router = express.Router();
const questionsService = require('../controllers/questionsService')

router.post('/deleteQuestion/:plant_id', questionsService.deleteQuestion)
router.get('/getQuestions', questionsService.getQuestions)
router.post('/postQuestion', questionsService.postQuestion)
router.post('/updateQuestion/:question_id', questionsService.updateQuestion)

module.exports = router;