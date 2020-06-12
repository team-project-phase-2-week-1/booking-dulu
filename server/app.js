require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
// const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')


app.use(cors()) // yang menghubungkan localhost server dan client
app.use(express.urlencoded({extended:true}))
app.use('/', router)
// app.use(errorHandler)
app.listen(port, () => {
    console.log(`App is Running on Port ${port}`)
})
