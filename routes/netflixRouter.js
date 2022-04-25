'use strict';
const jsonData = require('../data/netflix-titles.json')
const express = require('express') // Imports express package

const handleTitle = (req, res) => {
    const id = req.params.id || req.params['id']

    const title = jsonData.find(item => item.show_id === +id)
    if (typeof title === 'undefined') {
        res.status(404).json({error: 'There\'s no matching title'})
    } else {
        res.status(200).json(title)
    }
};

// Exports netflixRouter setup function as module
module.exports = (router = express.Router()) => { // adds a default value

    // Get one title
    router.get('/titles/:id', (req, res, next) => {
        const id = req.params.id || req.params['id']

        //console.log(req);
        const title = jsonData.find(item => item.show_id === +id)
        if (typeof title === 'undefined') {
            res.status(404).json({error: 'There\'s no matching title'})
        } else {
            res.status(200).json(title)
        }
    })

    // Different way of adding a handler to a route
    router.get('/titles/:id', handleTitle)

    // Filter titles
    router.get('/titles', (req, res) => {
        const year = req.query.year || req.query['year']

        const titles = jsonData.filter(item => item.release_year === +year)
        res.status(200).json(titles)

        // Good practice to return empty array when no titles are found for client rather than an error
    })

    return router;
};
