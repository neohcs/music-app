const router = require('express').Router()
const Note = require('../models/Note')

router.get('/', (req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Note.find({ id: req.params.id })
    .then(notes => res.json(notes))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Note.create(req.body)
    .then(note => res.json(note))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(note => res.json(note))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.json(err))
})

module.exports = router
