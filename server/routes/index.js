const router = require('express').Router();
const userRouter = require('./userRoutes');
const weatherRouter = require('../routes/weather')

router.use('/', userRouter);
router.use('/weather', weatherRouter);

module.exports =  router
