const express = require('express');
const router = express.Router();
const db = require('../../data/helpers/actionModel');

// router.get('/:id', (req, res) => {
//     db.get(req.params.id)
//         .then(response => {res.status(200).json(response)})
//         .catch(err => {res.status(500).json({error: "Could not get this action."})})
// })

router.get('/:id', (req, res) => {
    db.get(req.params.id)
    .then(users => {
        res.status(200).send(users)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error retrieving users.'
        })
    })
})

// router.post('/', (req, res) => {
    // if(req.body.project_id && req.body.description && req.body.notes) {
        // db.insert(req.body)
            // .then(response => {
                // res.status(201).json(response)
            // })
            // .catch(err => {res.status(500).json({error: "could not add the action"})})
    // }
// })

router.post('/', (req, res) => { 
    // const userInformation = req.body;

    // if (userInformation.name) {
        db.insert(req.body)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.status(500).json({error: "There was an error while saving the post to the database"})
        })

    // } else {
        // res.status(400).json({errorMessage: "Please provide title and content for the post."})
    // }
})

// router.put('/:id', (req, res) => {
    // db.update(req.params.id, req.body)
        // .then(response => {
            // res.status(200).json(response)
        // })
        // .catch(err => {
            // res.status(500).json({error: "Could not update this action."})
        // })
// })

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router;