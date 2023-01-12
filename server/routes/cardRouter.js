const Router = require('express')
const router = new Router()
const cardController = require('../controllers/cardController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), cardController.create)
router.get('/', cardController.getAll)


module.exports = router