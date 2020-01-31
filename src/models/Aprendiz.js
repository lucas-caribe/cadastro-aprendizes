const mongoose = require('mongoose')

const AprendizSchema = new mongoose.Schema({
    name: String,
    doc: String,
    phone: String,
    email: String
})

module.exports = mongoose.model('Aprendiz', AprendizSchema)