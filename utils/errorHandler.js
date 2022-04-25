'use strict';

const errorHandler = (error, route, res) => {
    const errorStatus = error.status || error.code || 500;
    const message = error.message || error.msg || 'Unknown error in ' + route;
    res.status(errorStatus).json({message});
};

module.exports = errorHandler;
