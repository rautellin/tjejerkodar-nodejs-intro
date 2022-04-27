'use strict';
const DataStore = require('@google-cloud/datastore').Datastore // Imports installed Datastore package from node_modules, more specifically only the Datastore class
const datastore = new DataStore() // Creates a new instance of the Datastore class
const articleDBKind = 'price' // Specifies which kind/table in our connected Datastore we want to fetch our data

// Enables syntax type helpers for text editors (i.e. VS Code)
/**
 * @param {String} id
 */
const getArticleById = (id) => {
  const articleKey = datastore.key([articleDBKind, id])

  return datastore
    .get(articleKey)
    .then(([article]) => article)
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    })
};

/**
 * @param {String} price
 * @param {Number} limit
 */
const getArticlesByPrice = (price, limit = 15) => {
  const query = datastore
    .createQuery(articleDBKind)
    .filter('price', '=', price).limit(limit);

  return datastore.runQuery(query).then(([articles]) => articles)
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};

// Exports functions as a module
module.exports = {
  getArticleById,
  fetchArticlesByPrice: getArticlesByPrice, // same as above, used if you want to rename the function
};
