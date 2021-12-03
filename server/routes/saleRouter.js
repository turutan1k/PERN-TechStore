const Router = require('express')
const router = new Router()
const saleController = require('../controllers/saleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), saleController.create)
router.get('/', saleController.getAll)


module.exports = router