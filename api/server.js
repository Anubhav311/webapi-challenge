const express = require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const cors = require('cors');

const server = express();

server.get('/', (req, res, next) => {
    res.send('its working');
})

module.exports = server