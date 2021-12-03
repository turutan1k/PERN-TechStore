const Router = require('express')
const router = new Router()
const consignmentController = require('../controllers/consignmentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), consignmentController.create)
router.get('/', consignmentController.getAll)


module.exports = router