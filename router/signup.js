const express = require('express');
const Signupuser = require('../model/signup')
const bcrypt = require('bcryptjs')
const genToken = require('../utils/token')

const router = express.Router()


router.get('/', async (req, res) => {
    res.send('someting')
})

router.post('/', async (req, res) => {
    let newUser = await new Signupuser({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),

    })

    newUser = await newUser.save();
    token = genToken(newUser)
    console.log(token)




    if (!newUser) {
        return res.send("Unable to signup")
    }

    res.send({ newUser, token })



})


// router.post('/', userCreation)



module.exports = router