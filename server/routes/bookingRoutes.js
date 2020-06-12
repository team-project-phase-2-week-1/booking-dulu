const router = require('express').Router();
const Controller = require('../controllers/bookingController');
const { authentication } = require('../middlewares/auth');

router.use(authentication);
router.get('/', Controller.listBooking);
router.post('/', Controller.addBooking);

module.exports = router;
