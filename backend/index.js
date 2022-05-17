const express = require('express')
const { port, host } = require('./config')
const { connection } = require('./config/db')

const app = express()

connection()

app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
})