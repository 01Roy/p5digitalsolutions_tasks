const jwt = require('jsonwebtoken')

const genToken = (data) => {

    return jwt.sign({ data: data }, "Roy", { expiresIn: '5d' })
}

// genToken()

module.exports = genToken