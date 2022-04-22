'use strict'; // Enables strict mode, which helps you to write cleaner code and prevents you from using undeclared variables
require('dotenv').config() // Imports dotenv to enable env variables
const express = require('express') // Imports express package
const app = express()
app.use(express.json()); // Enables json body parsing

// Defines the port the app will run on. Defaults to 3000
// Can be overridden when starting the server. For example using an .env file or running with the command PORT=9000 npm start
const port = process.env.PORT || 3000

// Homepage or root
app.get('/', (req, res) => {
    res.send('Welcome to Node.js intro!')
})

// Starts the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Enables routing
const router = express.Router();
app.use(router);

const netflixRouter = require('./routes/netflixRouter'); // importing router module
netflixRouter(router); // passing router object to router module
router.use(netflixRouter); // using imported router
