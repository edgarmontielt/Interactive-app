const { Router } = require('express')
const ListController = require('../controllers/lists')

const router = Router()
const listController = new ListController()

router.get('/', listController.getAll)

router.post('/create', listController.create)

module.exports = router