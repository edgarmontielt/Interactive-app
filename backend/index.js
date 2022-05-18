const express = require('express')
const { port, host, secret } = require('./config')
const { connection } = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')

//Routes import
const users = require('./routes/users')
const lists = require('./routes/lists')
const auth = require('./routes/auth')

const app = express()

//CORS
app.use(cors({
    origin: ['http://127.0.0.1:5500']
}))
// JSON
app.use(express.json())
connection()

//Session
app.use(session({
    secret: secret,
    resave:false,
    saveUninitialized: false
}))

//Morgan
app.use(morgan('dev'))

//Routes
app.use('/api', users)
app.use('/api/lists', lists)
app.use('/api/auth', auth)

app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
})