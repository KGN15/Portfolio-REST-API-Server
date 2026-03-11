const express = require('express')
const router = express.Router()
const { loginAdmin} = require('../controllers/auth.controller')
const { authAdminMiddlewares } = require('../middlewares/auth.middlewares')

router.post('/admin/login', loginAdmin)
router.get("/admin/verify", authAdminMiddlewares, (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin
  })
})


module.exports = router;