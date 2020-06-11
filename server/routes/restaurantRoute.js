'use strict'

const router = require('express').Router()
const Controller = require('../controllers/restaurantController')

router.get('/', Controller.getRestaurants)

module.exports = router