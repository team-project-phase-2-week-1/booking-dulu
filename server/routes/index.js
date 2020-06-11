'use strict'

const router = require('express').Router()
const userRoute = require('./userRoute')
const restaurantRoute = require('./restaurantRoute')

router.use('/users', userRoute)
router.use('/restaurants', restaurantRoute)

module.exports = router