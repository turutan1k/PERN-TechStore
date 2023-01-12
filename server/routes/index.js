const Router = require('express')
const router = new Router()

const billRouter = require('./billRouter');
const cardRouter = require('./cardRouter');
const consignmentRouter = require('./consignmentRouter');
const countryRouter = require('./countryRouter');
const deviceNameRouter = require('./deviceNameRouter');
const deviceRouter = require('./deviceRouter');
const manufacturerRouter = require('./manufacturerRouter');
const providerRouter = require('./providerRouter');
const saleRouter = require('./saleRouter');
const userRouter = require('./userRouter');

router.use('/bill', billRouter),
router.use('/card', cardRouter),
router.use('/consignment', consignmentRouter),
router.use('/country', countryRouter),
router.use('/deviceName', deviceNameRouter),
router.use('/device', deviceRouter),
router.use('/manufacturer', manufacturerRouter),
router.use('/provider', providerRouter),
router.use('/sale', saleRouter),
router.use('/user', userRouter),


module.exports = router