const express = require('express')
const router = express.Router()

const {createtMessage,getMessage} = require('../controllers/message.controller')


router.post('/create/message', createtMessage)
router.get('/get', getMessage)

module.exports = router;