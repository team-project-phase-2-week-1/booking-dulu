'use strict'

function errorHandler(err, req, res, next) {
    let statusCode = ''
    let errMessage = ''
    let errCode = ''

    switch(err.name) {
        case 'SequelizeValidationError':
            statusCode = 400
            errCode = 'VALIDATION_ERROR'

            const messages = []
            err.errors.forEach(el => {
                messages.push(el.message)
            })
            
            errMessage = messages
            break
        case 'INVALID_USER':
            statusCode = 400
            errMessage = 'Invalid email or password'
            errCode = err.name
            break
        case 'AUTHENTICATION_FAILED':
            statusCode = 401
            errMessage = 'Authentication Error'
            errCode = err.name
            break
        case 'AUTHORIZATION_FAILED':
            statusCode = 403
            errMessage = 'You are not authorized to do this'
            errCode = err.name
            break
        case 'TOKEN_ERROR':
            statusCode = 404
            errMessage = 'Token not Found'
            errCode = err.name
            break
        case 'NOT_FOUND_ERROR':
            statusCode = 404
            errMessage = err.message || 'Data not Found'
            errCode = err.name
            break
        default:
            statusCode = 500
            errMessage = 'internal server error'
            errCode = 'INTERNAL_SERVER_ERROR'
    }

    res.status(statusCode).json({
        errCode,
        message: errMessage
    })
}

module.exports = errorHandler