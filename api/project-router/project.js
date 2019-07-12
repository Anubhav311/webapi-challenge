const express = require('express');
const router = express.Router();
const db = require('../../data/helpers/projectModel');

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.get(id)
        .then(project => {
            res.status(200).send(project)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving project'
            })
        })
})

router.post('/', (req, res) => {
    if(req.body.name && req.body.description) {
        db.insert(req.body)
        .then(response => {
            res.status(500).json(response)
        })
        .catch(err => {
            res.status(400).json({
                error: "there is some error"
            })
        })
    }
})

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({
                error: "The project could not be updated"
            })
        })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({
                error: "Project could not be deleted."
            })
        })
})

router.get('/:id/actions', (req, res) => {
    db.getProjectActions(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({
                message: "Couldn't retrieve actions"
            })
        })
})

module.exports = router