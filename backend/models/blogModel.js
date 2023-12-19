const mongoose = require('mongoose');

const Schema = mongoose.Schema

const blodSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)