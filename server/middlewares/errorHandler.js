function errorHandler(err, req, res, next){
    let statusCode, errorMessage, errorCode;
    errorCode = err.name;
    
    switch(err.name){
        case 'SequelizeValidationError':
            const validationErrors = [];
            err.errors.forEach(el => {
                validationErrors.push(el.message);
            });
            statusCode = 400;
            errorMessage = validationErrors;
            break;
        case 'UserAlreadyExists':
            statusCode = 409;
            errorMessage = 'Email is already taken';
            break;
        case 'EmailNotFound':
            statusCode = 404;
            errorMessage = 'The Email is incorrect';
            break;
        default:
            statusCode = 500;
            errorMessage = 'Internal Server Error';
            console.log(err);
    }
    res.status(statusCode).json({ errorCode, message: errorMessage });
}
module.exports = errorHandler;