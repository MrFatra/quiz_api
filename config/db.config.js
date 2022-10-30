module.exports = {
    url : `mongodb+srv://fatra:${process.env.DB_PASSWORD}@quizcluster.jfmrgds.mongodb.net/quiz_api?retryWrites=true&w=majority`,
    connectionParams : {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
}