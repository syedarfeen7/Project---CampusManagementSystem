const mongoose = require('mongoose')

module.exports.connectToDB = () => {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.4la1k.mongodb.net/CMS?retryWrites=true&w=majority')
    const db = mongoose.connection;
    db.once('error', (error) => {
        console.log("Error in connecting to DB!")
    })
    db.once('open', () => {
        console.log("Connected to Database!")
    })
}