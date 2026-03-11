const express = require('express')
const router = express.Router()

const { createProject, getProject } = require('../controllers/project.controller')
const { authAdminMiddlewares } = require('../middlewares/auth.middlewares')


router.post('/create/project', createProject)
router.get('/get', getProject)

module.exports = router;