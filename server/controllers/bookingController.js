const { Booking, User } = require('../models');
class Controller {
    static listBooking(req, res, next){
        Booking.findAll({ where: { UserId: req.userData.id }})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            next(err);
        });

    }
    static addBooking(req, res, next){
        Booking.create({
            UserId: req.userData.id,
            restaurant_name: req.body.restaurant_name,
            restaurant_address: req.body.restaurant_address,
            date: req.body.date
        })
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            next(err);
        })
    }
}
module.exports = Controller;