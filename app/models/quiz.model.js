module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            question: String,
            category: String,
            answers: Object,
            correct_answers: Object,
            correct_answer: String,
            difficulty: String
        },
        { timestamps: true }
    )

    schema.method('toJSON', function() {
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Quiz = mongoose.model('quizCollection', schema)
    return Quiz
}