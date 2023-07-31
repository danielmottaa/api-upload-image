const express = require('express')
const app = express()

require('dotenv').config()
require('./db')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})