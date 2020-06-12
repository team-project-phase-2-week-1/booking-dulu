const router = require('express').Router()
const weatherRouter = require('../routes/weather')

router.use('/weather', weatherRouter)


module.exports =  router