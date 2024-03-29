const express = require('express');
const User = require('../model/signup')
const bcrypt = require('bcryptjs')
const genToken = require('../utils/token')

const router = express.Router()


router.get('/', async (req, res) => {
    const users = await User.find();
    if (!users) {
        res.send('no users exists')
    }

    res.status(200).send(users)
})

router.post('/signup', async (req, res) => {
    let newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),

    })

    newUser = await newUser.save();

    if (!newUser) {
        return res.send("Unable to signup")
    }

    res.send({ newUser })

})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.send('User is not found')
    }
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        token = genToken(user.id)
        return res.status(200).send({ user: user.name, token: token })
    } else {
        res.status(400).send('password is wrong')
    }

    // res.send(user)
})







module.exports = router