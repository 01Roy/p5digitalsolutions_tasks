// const singupuser = require('../model/signup');




// // user creation


// const userCreation = async (req, res) => {

//     try {

//         const userdetails = await singupuser.create({
//             name: req.body.name, email: req.body.email, password: req.body.password
//         })

//         res.status(200).json({ status: true, userdetails })
//     } catch (err) {
//         res.status(404).json({ error: err.message })
//     }
// }



// module.exports = userCreation