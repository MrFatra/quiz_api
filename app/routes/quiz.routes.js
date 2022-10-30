module.exports = (app) => {
    const quizController = require('../controllers/quiz.controller')
    const router = require('express').Router()

    router.get('/', quizController.findAll)

    app.use('/api/quiz', router)
}