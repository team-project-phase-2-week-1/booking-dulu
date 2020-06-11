'use strict'

const axios = require('axios')

class Controller {
    static getRestaurants(req, res, next) {
        const api_key = process.env.ZOMATO_KEY
        axios.get('https://developers.zomato.com/api/v2.1/search', {
            headers: {
              'user-key': api_key
            }
          })
          .then(function (response) {
            // console.log(response)
            res.status(200).json(response.data.restaurants)
          })
          .catch(function (error) {
            next(error)
          })
    }
}

module.exports = Controller