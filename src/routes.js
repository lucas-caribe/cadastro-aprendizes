const express = require('express')

const AprendizController = require('./controllers/AprendizController')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Hello')
})

routes.get('/aprendizes', AprendizController.index)
routes.post('/aprendizes', AprendizController.store)

module.exports = routes