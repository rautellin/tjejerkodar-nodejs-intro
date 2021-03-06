'use strict'; // Enables strict mode, which helps you to write cleaner code and prevents you from using undeclared variables
require('dotenv').config() // Imports dotenv to enable env variables
const express = require('express') // Imports express package
const app = express() // Creates an instance of express
app.use(express.json()) // Enables request body parsing to be in json format
const errorHandler = require('./utils/errorHandler')

// Defines the port the app will run on. Defaults to 8080
// Can be overridden when starting the server. For example using an .env file or running with the command PORT=9000 npm start
const port = process.env.PORT || 8080

// Starts the server, tells to express to listen to requests on specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// Homepage or root
app.get('/', (req, res) => {
  res.status(200).json({message: 'Congrats! Cute cats will soon be delivered!'})
})

// Adding a router
const router = express.Router() // Creates a new router object to handle requests
app.use(router) // Tell express to listen to routes defined in router

const netflixRouter = require('./routes/netflixRouter') // Importing router module
netflixRouter(router) // Passing router object to router module to add more routes

// Different way of adding a router
//const netflixRouter = require('./routes/netflixRouter') // Importing router module
//app.use(netflixRouter())

const datastoreRouter = require('./routes/datastoreRouter')
datastoreRouter(router, errorHandler) // Also passing the errorHandler helper function to router module for handling errors