const Flight = require('../models/flight')

module.exports = {
    index,
    newFlight,
    create,
    remove ,
    edit,
    update
}
function index(req, res){
    Flight.find({})
         .then(flightDocs => {
             res.render('flights/index', { flights: flightDocs })
         })
         .catch(err => {
             return res.send('err creating, check the terminal')
         })
 }
 function newFlight(req, res){
    res.render('flights/new')
}


function create(req, res){
    Flight.create(req.body)
    .then(flightDoc => {
        return res.redirect(`/flights`)
    })
    .catch(err => {
        return res.send('err creating, check the terminal')
    })
}

function remove(req, res){
    Flight.findById(req.params.id).deleteOne(req.body)
    .then(flightDoc => {
        return res.redirect(`/flights`)
    })
    .catch(err => {
        return res.send('err creating, check the terminal')
    })
}

function update(req, res){
    Flight.findById(req.params.id).updateOne(req.body)
    .then(flightDoc => {
        return res.redirect(`/flights`)
    })
    .catch(err => {
        return res.send('err creating, check the terminal')
    })
}
function edit(req, res){
    res.render('flights/edit',{id:req.params.id})}
    