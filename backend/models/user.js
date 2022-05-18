const { mongoose: { Schema, model } } = require('../config/db')

const userSchema = new Schema(
    {
        username: String,
        email: {
            unique: true,
            type: String
        },
        password: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('User', userSchema)