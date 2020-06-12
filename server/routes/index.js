'use strict'

const router = require('express').Router();
const userRouter = require('./userRoutes');
const weatherRouter = require('../routes/weather')
const restaurantRoute = require('./restaurantRoute')

router.use('/', userRouter);
router.use('/weather', weatherRouter);
router.use('/restaurants', restaurantRoute)

module.exports =  router
