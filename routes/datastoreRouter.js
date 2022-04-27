'use strict'
const {getArticleById, fetchArticlesByPrice} = require('../repositories/datastoreRepository') // Imports the datastoreRepository module

module.exports = (router, errorHandler) => {
  // Get one article
  router.get('/articles/:id', (req, res) => {
    const id = req.params.id || req.params['id']

    getArticleById(id)
      .then((article) => {
        if (typeof article === 'undefined') {
          res.status(404).json({error: 'There\'s no matching article'})
        } else {
          res.status(200).json(article)
        }
      })
      .catch((error) => {
        errorHandler(error, '/articles/:id', res)
      })
  })

  // Filter articles
  router.get('/articles', (req, res) => {
    const price = req.query.price || req.query['price']
    const limit = req.query.limit || req.query['limit']

    fetchArticlesByPrice(price, limit)
      .then((articles) => res.status(200).send(articles))
      .catch((error) => {
        errorHandler(error, '/articles', res)
      })
  })
}
