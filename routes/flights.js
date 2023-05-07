const flightController= require('../controllers/flights')
const express= require('express')
const router = express.Router()

router.get('/', flightController.index)

router.get('/new', flightController.newFlight)

router.post('/', flightController.create)

router.delete('/:id', flightController.remove)

router.get('/:id/edit', flightController.edit)

router.put('/:id', flightController.update)

module.exports = router