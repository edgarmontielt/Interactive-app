const express = require('express')
const { port, host } = require('./config')
const { connection } = require('./config/db')
const cors = require('cors')

//Routes
const users = require('./routes/users')
const lists = require('./routes/lists')

const app = express()

//CORS
app.use(cors({
    origin: ['http://127.0.0.1:5501']
}))
// JSON
app.use(express.json())
connection()

app.use('/api', users)
app.use('/api/lists', lists)

app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
})