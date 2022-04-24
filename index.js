'use strict'; // Enables strict mode, which helps you to write cleaner code and prevents you from using undeclared variables
require('dotenv').config() // Imports dotenv to enable env variables
const express = require('express') // Imports express package
const app = express() // Creates an instance of express
app.use(express.json()); // Enables request body parsing to be in json format

// Defines the port the app will run on. Defaults to 3000 (8080 is usually also used as default)
// Can be overridden when starting the server. For example using an .env file or running with the command PORT=9000 npm start
const port = process.env.PORT || 3000

// Starts the server, tells to express to listen to requests on specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Homepage or root
app.get('/', (req, res) => {
    res.json({message: 'Welcome to Node.js intro!'})
})

// Adding a router
const router = express.Router(); // Creates a new router object to handle requests
app.use(router); // Tell express to listen to routes defined in router

const netflixRouter = require('./routes/netflixRouter'); // importing router module
netflixRouter(router); // passing router object to router module to add more routes

// Different way of adding a router
//const netflixRouter = require('./routes/netflixRouter'); // importing router module
//app.use(netflixRouter());