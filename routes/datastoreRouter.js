'use strict';
const {getArticleById, fetchArticlesByPrice} = require('../repositories/datastoreRepository') // Imports the datastoreRepository module

module.exports = (router, errorHandler) => {
    // Get one article
    router.get('/articles/:id', (req, res) => {
        const id = req.params.id || req.params['id']

        getArticleById(id)
            .then((article) => res.status(200).send(article ?? {}))
            .catch((error) => {
                errorHandler(error, '/articles/:id', res)
            });
    })

    // Filter articles
    router.get('/articles', (req, res) => {
        const price = req.query.price || req.query['price']
        const limit = req.query.limit || req.query['limit']

        fetchArticlesByPrice(price, limit)
            .then((articles) => res.status(200).send(articles))
            .catch((error) => {
                errorHandler(error, '/articles', res)
            });
    })
};
