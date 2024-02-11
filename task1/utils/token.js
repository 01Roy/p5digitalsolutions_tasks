const jwt = require('jsonwebtoken')

const genToken = (data) => {
    let secret = process.env.SECRET

    return jwt.sign({ data: data }, secret, { expiresIn: '5d' })
}

// genToken()

module.exports = genToken