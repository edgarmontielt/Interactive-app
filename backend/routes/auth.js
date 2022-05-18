const { Router } = require('express')
const Auth = require('../controllers/auth')

const router = Router()
const authCtrl = new Auth()

router.post('/login', authCtrl.login)
router.post('/signup', authCtrl.signup)

module.exports = router