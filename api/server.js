const express = require('express')
const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const cors = require('cors')

const projectsRouter = require('./project-router/project');
const actionsRouter = require('./actions-router/actions');


const server = express();

server.use(express.json())
server.use(cors())

server.get('/', (req, res, next) => {
    res.send('its working');
})

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

module.exports = server