'use strict';
const jsonData = require('../data/netflix-titles.json')

const getTitleById = (id) => {
    return jsonData.find(item => item.show_id === parseInt(id));
};

const getTitlesByYear = (year) => {
    return jsonData.filter(item => item.release_year === +year);
};

module.exports = {
    getTitleById,
    getTitlesByYear,
};
