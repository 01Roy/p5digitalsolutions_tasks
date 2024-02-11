const { expressjwt: jwt } = require('express-jwt')

module.exports.authjwt = () => {
    const api = process.env.API;
    let secret = process.env.SECRET
    return jwt({
        secret,
        algorithms: ['HS256']
    }).unless({
        path: [
            `${api}/user/signup`,
            `${api}/user/login`
        ]
    })
}