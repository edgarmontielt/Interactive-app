const express = require('express')
const { port, host } = require('./config')
const { connection } = require('./config/db')
const cors = require('cors')

//Routes
const users = require('./routes/users')
const lists = require('./routes/lists')
const morgan = require('morgan')

const app = express()

//CORS
app.use(cors({
    origin: ['http://127.0.0.1:5500']
}))
// JSON
app.use(express.json())
connection()

//Morgan
app.use(morgan('dev'))

app.use('/api', users)
app.use('/api/lists', lists)

app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
})