const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const { authjwt } = require('./helper/jwt')

// Routers
const userRouter = require('./router/signup')
const bookRouter = require('./router/book')

const api = process.env.API;

// Middleware
app.use(express.json())
app.use(authjwt())


// ROUTERS
app.use(`${api}/user`, userRouter)
app.use(`${api}/book`, bookRouter)


// Database connection

mongoose.connect(process.env.CONNECTIONSTRING, { dbName: 'task1' }).then((response) => {
    console.log("Db is Connection is ready...")
}).catch(err => {
    console.log(err)
})





app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
