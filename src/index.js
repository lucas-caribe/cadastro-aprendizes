const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)