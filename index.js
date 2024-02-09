const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

const signupRouter = require('./router/signup')
const loginRouter = require('./router/login')

const api = process.env.API;

// Database connection

mongoose.connect(process.env.CONNECTIONSTRING, { dbName: 'task1' }).then((response) => {
    console.log("Db is Connection is ready...")
}).catch(err => {
    console.log(err)
})
// ROUTERS
app.use(express.json())
app.use(`${api}/signup`, signupRouter)
app.use(`${api}/login`, loginRouter)





app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
