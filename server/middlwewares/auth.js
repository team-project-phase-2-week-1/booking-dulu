// 'use strict'

// const jwt = require('jsonwebtoken')
// const {User} = require('../models')

// const authentication = (req, res, next) => {
//     const {access_token} = req.headers
//     if (!access_token) {
//         next({name: 'TOKEN_ERROR'})
//     } else {
//         let decode = jwt.verify(access_token, process.env.SECRET)
//         req.userData = decode
//         User.findByPk(req.userData.id)
//         .then(user => {
//             if (user) {
//                 next()
//             } else {
//                 next({name: 'NOT_FOUND_ERROR', message: 'User not Found'})
//             }
//         })
//         .catch(err => {
//             next({name: 'AUTHENTICATION_FAILED'})
//         })
//     }
// }

// const authorization = (req, res, next) => {
//     const {id} = req.params
//     Todo.findByPk(id)
//     .then(data => {
//         if (!data) {
//             next({name: 'NOT_FOUND_ERROR', message: 'Todo not Found'})
//         } else if (data.UserId !== req.userData.id) {
//             next({name: 'AUTHORIZATION_FAILED'})
//         } else {
//             next()
//         }
//     })
//     .catch(err => next(err))
// }

// module.exports = {authentication, authorization}