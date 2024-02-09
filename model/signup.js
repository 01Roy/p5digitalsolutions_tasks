const mongoose = require('mongoose');
const signupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const Signup = mongoose.model('User', signupSchema);
module.exports = Signup