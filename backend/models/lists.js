const { mongoose: { Schema, model } } = require('../config/db')

const listSchema = new Schema(
    {
        idUser: {
            ref: 'User',
            type: Schema.Types.ObjectId
        },
        title: String,
        description: String,
        importance: Number,
        status:Boolean
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('List', listSchema)