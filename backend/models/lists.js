const { mongoose: { Schema, model } } = require('../config/db')

const listSchema = new Schema(
    {
        title: String,
        description: String,
        importance: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('List', listSchema)