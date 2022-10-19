const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organisation: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Activity', ActivitySchema)