'use strict'

const axios = require('axios')

class Controller {
    static getRestaurants(req, res, next) {
        const api_key = process.env.ZOMATO_KEY
        const {city} = req.params
        let entity_id
        axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${city}`, {
          headers: {
            'user-key': api_key
          }
        })
          .then(function (response) {
            entity_id = response.data.location_suggestions[0].id
            return axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=city&count=3`, {
                headers: {
                  'user-key': api_key
                }
              })
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