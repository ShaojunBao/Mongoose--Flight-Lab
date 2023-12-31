const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

function newFlight(req,res){
    res.render('flights/new', {errorMsg: ''})
}

async function create(req,res){
    try{
        const flight = await Flight.create(req.body);
        res.redirect('/flights/new');
    } catch(err){
        console.log(err);
        res.render('flights/new', {errorMsg: 'Error while adding a new flight'})
    }
}

async function index(req,res){
    res.render('flights/index',{
        flights: await Flight.find()
    })
}

async function show(req,res){
    try{
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({flight: flight._id});
        res.render('flights/show', {flight,tickets});
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
  };