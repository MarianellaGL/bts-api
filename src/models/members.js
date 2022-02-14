const mongoose = require('mongoose');

const membersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    random: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    }
})

module.exports= mongoose.model('Members', membersSchema);