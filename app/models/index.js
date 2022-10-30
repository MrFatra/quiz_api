const dbConfig = require('../../config/db.config')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.connectionParams = dbConfig.connectionParams
db.quizModel = require('./quiz.model')(mongoose)

module.exports = db