const express = require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const cors = require('cors');

const projectsRouter = require('./project-router/project');


const server = express();

server.use(express.json())

server.get('/', (req, res, next) => {
    res.send('its working');
})

server.use('/api/projects', projectsRouter)

module.exports = server