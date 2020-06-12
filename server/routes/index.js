const router = require('express').Router();
const UserRouter = require('./userRoutes');

router.use('/', UserRouter);

module.exports = router;