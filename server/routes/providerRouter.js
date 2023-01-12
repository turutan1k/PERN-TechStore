const Router = require('express')
const router = new Router()
const providerController = require('../controllers/providerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), providerController.create)
router.get('/', providerController.getAll)


module.exports = router