'use strict'

const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class Controller {
    static register(req, res, next) {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        }
        User.create(newUser)
        .then(data => res.status(201).json({id: data.id, email: data.email}))
        .catch(err => next(err))
    }

    static login(req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                let access_token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.SECRET)
                res.status(200).json({access_token})
            } else {
                next({name: 'INVALID_USER'})
            }
        })
        .catch(err => next(err))
    }
}

module.exports = Controller