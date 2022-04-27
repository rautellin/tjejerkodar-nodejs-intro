'use strict'
const jsonData = require('../data/netflix-titles.json')

const getTitleById = (id) => {
  return jsonData.find(item => item.show_id === parseInt(id)) // parsing the id to a number
}

const getTitlesByYear = (year) => {
  return jsonData.filter(item => item.release_year === +year) // different way to parse the year to a number
}

module.exports = {
  getTitleById,
  getTitlesByYear,
}
