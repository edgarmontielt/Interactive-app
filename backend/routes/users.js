const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    return res.json({ hola: 'Mundo' })
})

module.exports = router