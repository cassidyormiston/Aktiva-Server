const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    loggedIn: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('users', UserSchema)