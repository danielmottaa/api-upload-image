const mongoose = require('mongoose')

require('dotenv').config()

mongoose.set('strictQuery', true)


async function main() {
    await mongoose.connect(`mongodb+srv://devdanielmotta:<password>@cluster0.mpbg6lm.mongodb.net/?retryWrites=true&w=majority`)
}