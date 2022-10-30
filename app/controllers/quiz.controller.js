const db = require('../models')
const Quiz = db.quizModel

exports.findAll = (req, res) => {
    Quiz.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || 'Error Retrieving Data.'
        })
    })
}
