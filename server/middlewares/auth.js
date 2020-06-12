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
// function authorization(req, res, next){
//     const { id } = req.params;
//     ToDo.findByPk(id)
//     .then(data => {
//         if(!data){
//             next({ name: 'DataNotFound' });
//         } else if(data.UserId !== req.userData.id){
//             next({ name: 'NotAuthorized' });
//         } else {
//             next();
//         }
//     })
//     .catch(err => {
//         next(err);
//     })
// }

module.exports = {
    authentication,
    authorization
};