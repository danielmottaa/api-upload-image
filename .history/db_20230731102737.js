const mongoose = require('mongoose')

require('dotenv').config()

mongoose.set('strictQuery', true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.mpbg6lm.mongodb.net/?retryWrites=true&w=majority`)
}

main().catch((err) => console.log('Erro ao conectar no banco: ', err))