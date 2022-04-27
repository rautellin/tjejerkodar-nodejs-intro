'use strict';
const {getTitleById, getTitlesByYear} = require('../repositories/netflixRepository') // Imports the datastoreRepository module

// Exports netflixRouter setup function as module
module.exports = (router) => {
  // Get one title
  router.get('/titles/:id', (req, res) => {
    const id = req.params.id || req.params['id'] // req object contains of a lot of different properties, try to console log the entire object to see more

    const title = getTitleById(id)

    if (typeof title === 'undefined') {
      res.status(404).json({error: 'There\'s no matching title'})
    } else {
      res.status(200).json(title)
    }
  })

  // Filter titles
  router.get('/titles', (req, res) => {
    const year = req.query.year || req.query['year']

    const titles = getTitlesByYear(year)

    res.status(200).json(titles)
    // Good practice to return empty array when no titles are found for client rather than an error
  })

  return router;
};
