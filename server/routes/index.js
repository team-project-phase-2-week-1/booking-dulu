'use strict'

const router = require('express').Router()
const restaurantRoute = require('./restaurantRoute')

router.get('/', (req, res) => {
    res.send('hello')
})

router.use('/restaurants', restaurantRoute)

module.exports = router