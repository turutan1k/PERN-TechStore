const Router = require('express')
const router = new Router()
const billController = require('../controllers/billController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), billController.create)
router.get('/', billController.getAll)


module.exports = router