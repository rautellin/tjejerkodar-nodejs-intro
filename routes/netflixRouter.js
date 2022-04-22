'use strict';
const jsonData = require('../data/netflix-titles.json')

module.exports = (router) => {
    // Get one title
    router.get('/titles/:id', (req, res) => {
        const id = req.params.id || req.params['id']

        //console.log(req);
        const title = jsonData.find(item => item.show_id === +id)
        if (typeof title === 'undefined') {
            console.log('empty')
            res.status(400).send(`There's no matching title`)
        } else {
            res.send(title)
        }
    })

    // Filter titles
    router.get('/titles', (req, res) => {
        const year = req.query.year || req.query['year']

        const titles = jsonData.filter(item => item.release_year === +year)
        res.send(titles)

        // Good practice to return empty array when no titles are found for client rather than an error
    })
};
