const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const { OPENAI_API_KEY } = process.env

const port = 8080

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("Welcome to our API!")
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})