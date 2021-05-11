const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const expressSession = require('express-session')
const port = 8000;
const clientsRoute = require('./modules/clients/clients-routes')
const userRoutes = require('./users/user-routes')
const dbConnector = require('./DBHelper/DBConnector')

app.use(expressSession({
    secret: 'This is a secret key', resave: false,
    saveUninitialized: true
}))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/Clients', clientsRoute)
app.use('/users', userRoutes)

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in starting the server at port ${port}`)
        return;
    }
    console.log("Successfully start server!")
    dbConnector.connectToDB();
})
