const { User } = require('../models');
const jwt = require('jsonwebtoken');

function authentication(req, res, next){
    const { access_token } = req.headers;
    if(!access_token){
        next({ name: 'TokenNotFound' });
    } else {
        req.userData = jwt.verify(access_token, process.env.SECRET);

        User.findByPk(req.userData.id)
        .then(data => {
            if(data){
                next();
            } else {
                next({ name: 'UserNotFound' });
            }
        })
        .catch(err => {
            next(err);
        })
    }
}
module.exports = {
    authentication
};