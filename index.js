const express = require('express')
const app = express()
const env = require('dotenv').config()
const db = require('./app/models/')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.mongoose.connect(db.url, db.connectionParams).then(() => {
    console.log('Database Connected!')
}).catch((err) => {
    console.error(`Connection Error While Connecting To Database!: ${err}`)
    process.exit()
})

app.get('/', (req, res) => {
    res.send('API is Running.')
})

require('./app/routes/quiz.routes')(app)

app.listen(process.env.PORT || 3000, () => console.log(`server is Running on http://localhost:${process.env.PORT || 3000}`))
