var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')

router.get('/getUsers', usersService.getUsers)
router.post('/postUser', usersService.postUser)

module.exports = router;
