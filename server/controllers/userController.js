const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class Controller {
    static register(req, res, next){
        User.findOne({ where: { email: req.body.email }})
        .then(data => {
            if(data){
                next({ name: 'UserAlreadyExists' });
            } else {
                return User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    gender: req.body.gender
                });
            }
        })
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            next(err);
        });
    }
    static login(req, res, next){
        User.findOne({ where: { email: req.body.email }})
        .then(data => {
            if(!data){
                next({ name: 'EmailNotFound' });
            } else if(bcrypt.compareSync(req.body.password, data.password)){
                const access_token = jwt.sign({
                    id: data.id,
                    email: data.email,
                    name: data.name,
                    gender: data.gender
                }, process.env.SECRET );
                res.status(200).json({ id: data.id, email: data.email, access_token });
            } else {
                next({ name: 'WrongPassword' });
            } 
        })
        .catch(err => {
            next(err);
        })
    }
}
module.exports = Controller;